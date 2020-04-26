import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import axios from 'axios/index';
import Cookies from 'universal-cookie';
import {v4 as uuid} from 'uuid';

import Message from './Message';
import Card from './Card';
import QuickReplies from './QuickReplies';

const cookies = new Cookies();

const address = '/';


class Chatbot extends Component {
    messagesEnd;
    talkInput;
    constructor(props){
        super(props);

        this._handleInputKeyPress=this._handleInputKeyPress.bind(this);
        this._handleQuickReplyPayload = this._handleQuickReplyPayload.bind(this);

        this.hide = this.hide.bind(this);
        this.show = this.show.bind(this);

        this.state={
            messages: [],
            showBot: false,
            shopWelcomeSent: false
        }

        if(cookies.get('userID')===undefined){
            cookies.set('userID',uuid(),{path: '/'});
        }
    }

    async df_text_query(text){
        let says = {
            speaks: 'user',
            msg: {
                text: {
                    text: text
                }
            }
        };

        this.setState({
            messages: [...this.state.messages, says]
        })
        const res = await axios.post('/api/df_text_query', {text, userID: cookies.get('userID')});

        for(let msg of res.data.fulfillmentMessages){
            says = {
                speaks: 'bot',
                msg: msg
            }
            this.setState({messages: [...this.state.messages, says]})
        }
    }

    async df_event_query(event){
        const res = await axios.post('/api/df_event_query', {event, userID: cookies.get('userID')});

        for (let msg of res.data.fulfillmentMessages){
            let says = {
                speaks: 'bot',
                msg: msg
            };
            this.setState({messages: [...this.state.messages, says]})
        }
    }

    resolveAfterXSeconds(x){
        return new Promise(resolve=>{
            setTimeout(()=>{
                resolve(x)
            },x*1000)
        })
    }

    async componentDidMount(){
        this.df_event_query('Welcome');

        if (window.location.pathname === '/shop' && !this.state.shopWelcomeSent) {
            await this.resolveAfterXSeconds(1)
            this.df_event_query('WELCOME_SHOP');
            this.setState({ shopWelcomeSent: true, showBot: true });
        }

        this.props.history.listen(() => {
            if (this.props.history.location.pathname === '/shop' && !this.state.shopWelcomeSent) {
                this.df_event_query('WELCOME_SHOP');
                this.setState({ shopWelcomeSent: true, showBot: true });
            } 
        });
    }

    // componentDidUpdate() {
    //     this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    //     if ( this.talkInput ) {
    //         this.talkInput.focus();
    //     } 
    // }

    show(event){
        event.preventDefault();
        event.stopPropagation();
        this.setState({showBot: true})
    }

    hide(event){
        event.preventDefault();
        event.stopPropagation();
        this.setState({showBot: false})
    }

    _handleQuickReplyPayload(event, payload, text) {
        event.preventDefault();
        event.stopPropagation();

        switch(payload){
            case 'recommended_yes':
                this.df_event_query('SHOW_RECOMMENDATIONS');
                break;
            case 'training_masterclass':
                this.df_event_query('MASTERCLASS');
                break;
            default:
                this.df_text_query(text);
        }
    }

    renderCards(cards){
        return cards.map((card,i)=><Card key={i} payload={card.structValue}/>)
    }

    renderOneMessage(message, i){
        if(message.msg && message.msg.text && message.msg.text.text){
            return <Message key={i} speaks={message.speaks} text={message.msg.text.text}/>
        } else if (message.msg && message.msg.payload.fields.cards){
            return <div key={i}>
                <div className="card-panel grey lighten-5 z-depth-1">
                    <div style={{overflow: 'hidden'}}>
                        <div style={{paddingLeft: 25}} className="col s2">
                        <a href={address}  className="btn-floating btn-large waves-effect waves-light red">
                            {message.speaks}
                        </a>
                        </div>
                    </div>
                    <div style={{overflow: 'auto', overflowY: 'scroll'}}>
                        <div style={{display: 'flex' ,height: 300, width: message.msg.payload.fields.cards.listValue.values.length * 270}}>
                            {this.renderCards(message.msg.payload.fields.cards.listValue.values)}
                        </div>
                    </div>
                </div>
            </div>
        } else if (message.msg &&
            message.msg.payload &&
            message.msg.payload.fields &&
            message.msg.payload.fields.quick_replies
        ) {
            return <QuickReplies
                text={message.msg.payload.fields.text ? message.msg.payload.fields.text : null}
                key={i}
                replyClick={this._handleQuickReplyPayload}
                speaks={message.speaks}
                payload={message.msg.payload.fields.quick_replies.listValue.values}/>;
        }
    }

    renderMessages(stateMessages){
        if(stateMessages){
            return stateMessages.map((message, i)=>{
               return this.renderOneMessage(message, i)
            });
        } else {
            return null;
        }
    }

    _handleInputKeyPress(e){
        if(e.key==='Enter'){
            this.df_text_query(e.target.value);
            e.target.value='';
        }
    }

    render() {
        if(this.state.showBot){
        return (
            <div style={{height: 500, width:400, position: 'fixed', bottom: 0, right: 0, border: '1px solid blue-grey lighten-5', backgroundColor: '#fff', zIndex: 99999}}>
                <nav>
                    <div className="nav-wrapper blue">
                        <a href={address} style={{marginLeft:10}} onClick={this.hide} className="brand-logo">ChatBot</a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down" >
                            <li><a href={address}onClick={this.hide}>Close</a></li>
                        </ul>
                    </div>
                </nav>
                <div id="chatbot" style={{height: 338, width: '100%', overflow: 'auto'}}>
                    {this.renderMessages(this.state.messages)}
                    <div ref={(el)=>{this.messagesEnd = el}} style={{float: 'left', clear: 'both'}}>
                    </div>
                </div>
                <div style={{paddingLeft: 40}} className="col s12">
                    <input style={{borderBottom: '1px solid #fff',boxShadow:'0 1px 0 0 #2196f3', margin: 0, paddingLeft: '1%', paddingRight: '1%', width: '98%'}} placeholder="Type a message:" type="text" ref={(input)=>{this.talkInput=input}} onKeyPress={this._handleInputKeyPress}/>
                </div>
            </div>
        ) } else {
            return (
                <div style={{minHeight: 40, maxHeight: 500, width:400, position: 'fixed', bottom: 0, right: 0, border: '1px solid lightgrey', zIndex: '999999'}}>
                    <nav>
                        <div className="nav-wrapper blue">
                            <a href={address} style={{marginLeft:10}} onClick={this.show} className="brand-logo">ChatBot</a>
                            <ul id="nav-mobile" className="right hide-on-med-and-down">
                                <li><a href={address} onClick={this.show}>Open</a></li>
                            </ul>
                        </div>
                    </nav>
                    {/* <div rel={(el)=>{this.messagesEnd=el}} style={{float: "left", clear: "both", backgroundColor: '#fff'}}></div>     */}
                </div>
            )
        }
    }
}

export default withRouter(Chatbot);
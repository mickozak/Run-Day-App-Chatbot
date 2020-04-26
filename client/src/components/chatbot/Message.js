import React from 'react';

const Message = (props) => (
    <div className="col s12 m8 offset-m2 offset-l3">
        <div className="card-panel grey lighten-5 z-depth-1">
            <div style={{marginLeft: 10}} className="row valign-wrapper">
                {props.speaks === 'bot' &&
                    <div className="col s2">
                        <p className="btn-floating btn-large waves-effect waves-light red">
                            <span>{props.speaks}</span>
                        </p>
                    </div>
                }
                <div style={{marginLeft: 15}} className="col s10">
                    <span className="black-text">
                        {props.text}
                    </span>
                </div>
                {props.speaks === 'user' &&
                    <div className="col s2">
                        <p className="btn-floating btn-large waves-effect waves-light red">
                            {props.speaks}
                        </p>
                    </div>
                }
            </div>
        </div>
    </div>
);

export default Message;
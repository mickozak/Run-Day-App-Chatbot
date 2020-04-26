import React, { Component } from 'react';
import Materialize from  'materialize-css/dist/js/materialize.min.js';

class Banner extends Component{
  componentDidMount() {
    var parallaxElement = document.querySelectorAll('.parallax');
    Materialize.Parallax.init(parallaxElement, {});
  }
  render(){
    return(
      <div id="index-banner" className="parallax-container" style={{position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <div className="section no-pad-bot runday-parallax">
          <div className="container">
            <div className="row center">
              {this.props.control === 1 && <h4 className="header col s12 blue-grey-text text-lighten-5">Run with us, whenever you want.</h4>}
              {this.props.control === 2 && <h4 className="header col s12 blue-grey-text text-lighten-5">Meet new friends and spend time together.</h4>}
              {this.props.control === 3 && <h4 className="header col s12 blue-grey-text text-lighten-5">A modern application with which you can do everything.</h4>}
            </div>
            <div className="row center">
              {this.props.control === 1 && <a href="#functions" id="download-button" className="btn-large waves-effect waves-light blue pulse blue-grey-text text-lighten-5">More Info</a>}
            </div>
          </div>
        </div>
        <div className="parallax"><img alt="" src={this.props.run}/>
        </div>
      </div>
    )
  }
}

export default Banner;
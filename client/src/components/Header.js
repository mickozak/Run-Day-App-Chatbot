import React, { Component } from 'react'
import Materialize from  'materialize-css/dist/js/materialize.min.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const address = {
    main: '#',
    functions:'#functions',
    team: '#team',
    contact: '#contact'
}

class Header extends Component{
    componentDidMount() {
        let sideNavElemenet = document.querySelector('#slide-out');
        Materialize.Sidenav.init(sideNavElemenet, {});

        var scrollSpyElement = document.querySelectorAll('#scrollspy');
        Materialize.ScrollSpy.init(scrollSpyElement, {scrollOffset: 0});
      }
    render(){
        return(
            <div>
                <nav className="z-depth-0 white">
                    <a href={address.main} style={{color: '#37474f'}} className="sidenav-trigger" data-target="slide-out"><FontAwesomeIcon icon={faBars} size="lg"/></a>
                    <div>
                        <a href={address.main} className="brand-logo blue-grey-text text-darken-3">RunDay</a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a href={address.main} className="blue-grey-text text-darken-3">Home</a></li>                          
                            <li><a href={address.functions} className="blue-grey-text text-darken-3">Functions</a></li>
                            <li><a href={address.team} className="blue-grey-text text-darken-3">Team</a></li>
                            <li><a href={address.contact} className="blue-grey-text text-darken-3">Contact</a></li>
                        </ul>
                    </div>
                </nav>
                <ul id="slide-out" className="sidenav">
                    <li><a href={address.main} className="blue-grey-text text-darken-3">Home</a></li>                          
                    <li><a href={address.functions} className="blue-grey-text text-darken-3">Functions</a></li>
                    <li><a href={address.team} className="blue-grey-text text-darken-3">Team</a></li>
                    <li><a href={address.contact} className="blue-grey-text text-darken-3">Contact</a></li>
                </ul>
            </div>
        )
    }
}

export default Header;
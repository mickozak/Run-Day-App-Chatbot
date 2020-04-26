import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

import imageOneKozak from '../../img/team/mkozak.webp'
import imageTwoPietrzak from '../../img/team/jpietrzak.webp'
import imageThreeSienicka from '../../img/team/ksienicka.webp'

const Team = () => (      
    <div className="section scrollspy" id="team">
        <div className="section">
            <div className="row">
                <div className="col s12 center">
                    <h4 className="blue-grey-text text-darken-3">Our Team</h4>
                    <div className="left-align light center">
                        <p className="blue-grey-text text-darken-3" style={{fontSize: 18}}>The Run Day team is a group of people who take challenges and adventures. Each of us has a specific task, we are completely different, but one thing connects us - a common passion for running. Each user has a chance to become part of our team.</p>
                        <div className="row">
                            <div className="runday-person col s12 m4">
                                <img alt="" style={{marginTop: 10}} src={imageOneKozak}/>
                                <h5 className="blue-grey-text text-darken-3">Michał Kozak</h5>
                                <p className="blue-grey-text text-darken-3">JavaScript Developer</p>
                                <span className="blue-grey-text text-darken-3" ><FontAwesomeIcon icon={faFacebook} size="lg"/> <FontAwesomeIcon icon={faLinkedinIn} size="lg"/> <FontAwesomeIcon icon={faGithub} size="lg"/></span>
                            </div>
                            <div className="runday-person col s12 m4 ">
                                <img alt="" style={{marginTop: 10}} src={imageTwoPietrzak}/>
                                <h5 className="blue-grey-text text-darken-3">Joanna Pietrzak</h5>
                                <p className="blue-grey-text text-darken-3">Frontend Developer</p>
                                <span className="blue-grey-text text-darken-3"><FontAwesomeIcon icon={faFacebook} size="lg"/> <FontAwesomeIcon icon={faLinkedinIn} size="lg"/> <FontAwesomeIcon icon={faGithub} size="lg"/></span>
                            </div>
                            <div className="runday-person col s12 m4">
                                <img alt="" style={{marginTop: 10}} src={imageThreeSienicka}/>
                                <h5 className="blue-grey-text text-darken-3">Katarzyna Sienicka</h5>
                                <p className="blue-grey-text text-darken-3">UX/UI Designer</p>
                                <span className="blue-grey-text text-darken-3"><FontAwesomeIcon icon={faFacebook} size="lg"/> <FontAwesomeIcon icon={faLinkedinIn} size="lg"/> <FontAwesomeIcon icon={faGithub} size="lg"/></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>     
)

export default Team;
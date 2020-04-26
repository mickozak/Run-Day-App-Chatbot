import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareSquare, faPaperPlane } from '@fortawesome/free-regular-svg-icons';

const Form = () => (
<div>
    <div className="section scrollspy" id="contact">
        <div className="section">
            <div className="row">
                <div className="col s12 m6">
                    <div className="row">
                        <h4 className="blue-grey-text text-darken-3">Contact</h4>
                        <form className="col s12">
                            <div className="row">
                                <div className="input-field col s6">
                                    <input style={{borderBottom: '1px solid #fff',boxShadow:'0 1px 0 0 #000'}} id="first_name" type="text" className="validate"/>
                                    <label className="blue-grey-text text-darken-3">First Name</label>
                                </div>
                                <div className="input-field col s6">
                                    <input style={{borderBottom: '1px solid #fff',boxShadow:'0 1px 0 0 #000'}} id="last_name" type="text" className="validate"/>
                                    <label className="blue-grey-text text-darken-3">Last Name</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input style={{borderBottom: '1px solid #fff',boxShadow:'0 1px 0 0 #000'}} id="email" type="email" className="validate"/>
                                    <label className="blue-grey-text text-darken-3">Email</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <textarea style={{borderBottom: '1px solid #fff',boxShadow:'0 1px 0 0 #000'}} id="textarea1" className="materialize-textarea"></textarea>
                                    <label className="blue-grey-text text-darken-3">Textarea</label>
                                </div>
                            </div>
                            <button className="btn waves-effect blue blue-grey-text text-lighten-5" type="submit" name="action">Submit <FontAwesomeIcon icon={faPaperPlane}/></button>
                        </form>
                    </div>
                </div>
                <div className="col s12 m6">
                    <div className="icon-block">
                        <h2 className="center blue-text animated zoomIn"><FontAwesomeIcon icon={faShareSquare}/></h2>
                    </div>
                    <div className="center">
                        <div className="blue-grey-text text-darken-3 center" style={{fontSize: 18}}>
                            <h4>Run Day Application Ltd.</h4>
                            <p>Address: Ul. Krakowskie Przedmieście 120</p>
                            <p>City: 20-450 Lublin</p>
                            <p>Phone: +48 739 066 120</p>
                            <p>E-mail: contact@rundayapp.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
)

export default Form;
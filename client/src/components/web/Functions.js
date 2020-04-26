import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDirections, faList, faCalendar } from '@fortawesome/free-solid-svg-icons';

const Functions = () => (
    <div className="section scrollspy" id="functions">
        <div className="section">
            <div className="row">
                <div className="col s12 m4">
                    <div className="icon-block">
                        <h2 className="center blue-text animated zoomIn"><FontAwesomeIcon icon={faDirections}/></h2>
                        <h5 className="center blue-grey-text text-darken-3">Localization</h5>
                        <p className="light blue-grey-text text-darken-3">The RunDay application, thanks to the use of the latest technologies, has the greatest accuracy in showing the current location of the runner. In addition, it is distinguished by a transparent and refined interface. The program uses very little energy, and the dark background is perfect for dark gears. GPS turns on automatically when training begins. In addition, the user can choose the type of plain or satellite map.</p>
                    </div>
                </div>
                <div className="col s12 m4">
                    <div className="icon-block">
                        <h2 className="center blue-text animated zoomIn"><FontAwesomeIcon icon={faList}/></h2>
                        <h5 className="center blue-grey-text text-darken-3">Lists of challenges</h5>
                        <p className="light blue-grey-text text-darken-3">The application has the ability to create a list of challenges. Through it, the user can manage their goals. The program sends a notification when the goal is reached. To see detailed results, there is no need to log into the portal page, because maps, charts and other training parameters are available in the mobile version.</p>
                    </div>
                </div>
                <div className="col s12 m4">
                    <div className="icon-block">
                        <h2 className="center blue-text animated zoomIn"><FontAwesomeIcon icon={faCalendar} /></h2>
                        <h5 className="center blue-grey-text text-darken-3">Calendar</h5>
                        <p className="light blue-grey-text text-darken-3">The user gains access to the multifunctional calendar. Managing calendars is very simple, it allows you to create many events that are independent of each other. Thanks to the integration with social networking sites, it allows you to track your friends' progress in training or share their route or the duration of the training live. In addition, the user can share his photos and general impressions from the completed run.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>                
)

export default Functions;
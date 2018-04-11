import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const LearnMore = props => {
    return (
        <div>
            <ul>
                <li className="learnmore.style">
                    OneApp is a modernized social network that help users to create a profile 
                    that will/can serve as their college application.
                </li>
                <li className="learnmore.style">
                    Develop a full-stack application to help prospective students to create a profile for school application. 
                    The application can be a gateway between schools and students to find the best match University.
                </li>
                <li className="learnmore.style">
                    OneApp also provides suggestions for schools and 
                    brodens your horizens through creating unique college opportunities.
                </li>

            </ul>
        </div>
    )
}

export default LearnMore;
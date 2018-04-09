import React, { Component } from "react";
import ProfileNav from "../../component/Nav";
import ProfileSettings from "../../component/Profile-Settings";
import "./profile.css";

class Profile extends Component {

    render() {
        return (
            <div >
                <ProfileNav />
                <h1>Proflie</h1>
                <div className="form">
                    <ProfileSettings />
                </div>
            </div>

        )
    }
}

export default Profile;

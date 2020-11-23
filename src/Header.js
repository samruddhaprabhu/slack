import React from 'react';
import './Header.css';
import {Avatar} from "@material-ui/core";

function Header() {
    return (
        <div className="header">
            <div className="header_left">
                <Avatar
                  className="header_avatar"
                  alt={user?.displayName}
                />
            </div>
            <div className="header_search"></div>
            <div className="header_right"></div>
        </div>
    )
}

export default Header

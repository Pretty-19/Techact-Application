import React from 'react'
import {Input} from "reactstrap";
import {Avatar} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import SearchIcon from '@material-ui/icons/Search'
import HelpOutlineIcon  from '@material-ui/icons/Help';
import user  from "./static/user.jpg";

function Header() {
    return (
        <div className="nav-bar">
            <div className="header__left">
               <Avatar className="header__avatar"
                alt="User"
               src={user}
               />
            <AccessTimeIcon/>
            </div>
            <div className="header__search">
            <Input  placeholder="Search chats" ></Input>
            <SearchIcon/>
            </div>
            <div className="header__right">
            <HelpOutlineIcon/>
                {/* logout */}
            </div>
        </div>
    )
}

export default Header

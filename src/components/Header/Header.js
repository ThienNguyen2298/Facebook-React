import React from 'react';
import './Header.css';
import {Avatar, IconButton} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue } from '../../contextApi/StateProvider';

function Header() {
    const [{user}, dispatch] = useStateValue();
    return (
        <div className="header">
            <div className="header__left">
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/768px-Facebook_Logo_%282019%29.png"
                    alt="" 
                    />
                <div className="header__input">
                    <SearchIcon></SearchIcon>
                    <input placeholder="Search Facebook" type="text"></input>
                </div>
            </div>
            <div className="header__center">
                <div className="header__option header__option--active">
                    <HomeIcon fontSize="large"></HomeIcon>
                </div>
                <div className="header__option">
                    <FlagIcon fontSize="large"></FlagIcon>
                </div>
                <div className="header__option">
                    <SubscriptionsOutlinedIcon fontSize="large"></SubscriptionsOutlinedIcon>
                </div>
                <div className="header__option">
                    <StorefrontOutlinedIcon fontSize="large"></StorefrontOutlinedIcon>
                </div>
                <div className="header__option">
                    <SupervisedUserCircleIcon fontSize="large"></SupervisedUserCircleIcon>
                </div>
            </div>
            <div className="header__right">
                <div className="header__info">
                    <Avatar src={user.photoURL}/>
                    <h4>{user.displayName}</h4>
                </div>
                <IconButton>
                    <AddIcon></AddIcon>
                </IconButton>
                <IconButton>
                    <ForumIcon></ForumIcon>
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon></NotificationsActiveIcon>
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon></ExpandMoreIcon>
                </IconButton>
            </div>
        </div>
    )
}

export default Header

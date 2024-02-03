import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import img1 from './logo.png' //In react you have to import images to use them
import img2 from './Profilepic.jpg'
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';


function Header() {
  return (
    <div className="header">
        <div className="header__left">
            <img src={img1} alt="" />
            <div className="header__search">
                <SearchIcon />
                <input type="text" />
            </div>
        </div>

        <div className="header__right">
          {/*Here we will create a reusable component for the header options*/}
          <HeaderOption Icon={HomeIcon} title="Home" />
          <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
          <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
          <HeaderOption Icon={ChatIcon} title="Messaging" />
          <HeaderOption Icon={NotificationsIcon} title="Notifications" />
          <HeaderOption avatar={img2} title="Me" />
        </div>
    </div>
  )
}

export default Header

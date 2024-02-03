import React from 'react'
import './Sidebar.css'
import {Avatar} from '@mui/material'

function Sidebar() {
  /* Creating a function so that we can reuse the hashtag*/
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
    </div>
  )  

  return (
    <div className='sidebar'>
        <div className="sidebar__top">
            <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?w=1380&t=st=1705697524~exp=1705698124~hmac=9eb3716da608c037d9778546cd87987abaab6d0e5e6f2729ac3930a8e2eff4fd" alt="" />
            <Avatar className='sidebar__avatar'/>
            <h2>Ankur Pandey</h2>
            <h4>pankur216@gmail.com</h4>
        </div>
        <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>Who viewed you</p>
                <p className="sidebar__statNumber">2,543</p>
            </div>
            <div className="sidebar__stat">
                <p>Who viewed you</p>
                <p className="sidebar__statNumber">2,448</p>
            </div>
        </div>
        <div className="sidebar__bottom">
            <p>Recent</p>
            {recentItem('reactjs')}
            {recentItem('programming')}
            {recentItem('softwareengineering')}
            {recentItem('developer')}
        </div>
    </div>
  )
}

export default Sidebar

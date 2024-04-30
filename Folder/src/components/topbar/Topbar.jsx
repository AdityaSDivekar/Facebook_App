import React from 'react'
import './topbar.css'
import { Chat, Notifications, Person ,Search} from '@mui/icons-material'

const Topbar = () => {
  return (
    <div className='topbarContainer'>
      <div className='topbarLeft'>
        <span className="logo"><img src="src\assets\person\facebook.png" alt=""  /></span>
      </div>
      <div className='topbarCenter'>
        <div className="searchbar">
          <Search className='SearchIcon'/>
          <input type="text" className="searchInput" placeholder='Search for your friends, post or video' />
        </div>
      </div>
      <div className='topbarRight'>
        <div className="topbarLinks">
          <span className="topbarLinks">HomePage</span>
          <span className="topbarLinks">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person/>
            <span className="topbarIconBadge">3</span>
          </div>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Chat/>
            <span className="topbarIconBadge">3</span>
          </div>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Notifications/>
            <span className="topbarIconBadge">3</span>
          </div>
        </div>
        <img src="src\assets\person\p3.png" alt=""  className='topbarImg'/>
      </div>
    </div>
  )
}

export default Topbar

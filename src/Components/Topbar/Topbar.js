import React from 'react'
import  NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';
import './Topbar.css'

function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarwrapper">
            <div className="topleft">
                <input type="text" className='search' placeholder=' &#x1F50D; search here....'></input>
            </div>
                <div className="topright">
                    <div className="topbariconcontainer">
                        <NotificationsNoneIcon />
                        <span className="topiconbadge"></span>
                        
                    </div>
                    <div className="topbariconcontainer">
                        <CommentRoundedIcon />
                        <span className="topiconbadge"></span>
                        
                    </div>
                    <img src="https://i.pinimg.com/originals/57/e5/10/57e5103b8a936c11a6f3a702686fc4ef.jpg" 
                    alt="" className='photo'/>
                </div>

            </div>

        </div>
    )
}

export default Topbar

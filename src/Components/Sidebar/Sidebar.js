import React from 'react'
import './Sidebar.css'
import HomeIcon from '@mui/icons-material/Home';
import ReorderIcon from '@mui/icons-material/Reorder';
import {Link} from 'react-router-dom'


function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarwrapper">
            <h2 className="head">Datahub</h2>
                <div className="sidebarmenu">
                   <Link to ="/" style={{textDecoration:'none'}}>
                    <h3 className="sidebartitle active">  <HomeIcon />&nbsp; &nbsp;Dashboard</h3></Link>
                    <ul className="sidebarlist">

                    </ul>
                    <h3 className="sidebartitle">   < ReorderIcon />&nbsp; &nbsp;Orders</h3>
                    <ul className="sidebarlist">
                       <Link to="/addorder" style={{textDecoration:'none'}}>
                        <li className="sidebarlistitem">

                            Add order
                        </li></Link>
                        <Link to="/orderlist" style={{textDecoration:'none'}}>
                        <li className="sidebarlistitem">

                            List orders
                        </li>
                        </Link>
                    </ul>

                </div>
            </div>

        </div>

    )
}

export default Sidebar

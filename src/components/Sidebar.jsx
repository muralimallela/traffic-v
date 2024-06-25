import React, { useState } from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
// import AddBusinessOutlinedIcon from '@mui/icons-material/AddBusinessOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
// import { white } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import rev from './reveroad.png'
import pro from './img.jpg'

function Sidebar() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <div className="con">
                <div className="hamburger" onClick={toggleSidebar}>
                    {isSidebarOpen ? <CloseIcon color='disabled'/> : <MenuIcon />}
                </div>
                <div className={`side ${isSidebarOpen ? 'open' : ''}`}>
                    <div className="top">
                        <img src={rev} />
                        <div className="line"></div>
                        <ul>
                            <li>
                                <button onClick={toggleDropdown} className='btn bg3'>
                                    <AddCircleOutlineIcon/> New Report
                                    {isDropdownOpen ? <KeyboardArrowUpOutlinedIcon /> : <KeyboardArrowDownOutlinedIcon />}
                                </button>
                                {isDropdownOpen && (
                                    <ul className="dropdown">
                                        <li><Link to='/Voilation' className='link'>Voilation</Link></li>
                                        <li><Link to='/Accident' className='link'>Accident</Link></li>
                                        <li><Link to='/Traffic' className='link'>Traffic</Link></li>
                                    </ul>
                                )}
                            </li>
                        </ul>
                        <button className='btn bg1'>
                            <Link to='/' className='link'>
                                <HomeIcon />
                                <span>Home</span>
                            </Link>
                        </button>
                        <button className='btn bg2'>
                            <Link to='/Ambulence' className='link'>
                                <LocalShippingOutlinedIcon/>
                                <span>Ambulence</span>
                            </Link>
                        </button>
                    </div>
                    <button className='btn lg'>
                        <LogoutIcon />
                        <span>Logout</span>
                    </button>
                </div>
                <div className='nav'>
                    <NotificationsNoneIcon/>
                    <img src={pro} />
                </div>
            </div>
        </>
    );
}

export default Sidebar;

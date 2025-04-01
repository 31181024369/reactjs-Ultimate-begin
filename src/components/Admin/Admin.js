import { useState } from "react";
import SideBar from "./SideBar";
import { FaHeart, FaBars } from 'react-icons/fa';
import './Admin.scss'
import { Outlet } from "react-router-dom";
import PerfectScrollbar from 'react-perfect-scrollbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Language from "../Header/Language";
const Admin=(props)=>{
    const [collapsed,setCollapsed]=useState(false);
    return (
        <div className="admin-container">
            <div className="admin-sidebar">
                <SideBar collapsed={collapsed}></SideBar>
            </div>
            <div className="admin-content">
                <div className="admin-header">
                    <span onClick={()=>setCollapsed(!collapsed)}>
                    <FaBars className="leftside"></FaBars>
                    </span>
                    <div className="rightside">
                        <NavDropdown title="Settings" id="basic-nav-dropdown">
                            <NavDropdown.Item href="">Profile</NavDropdown.Item>
                            <NavDropdown.Item href="">
                                Log out
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Language></Language>
                    </div>
                </div>
                <div className="admin-main">
                    <PerfectScrollbar>
                        <Outlet></Outlet>
                    </PerfectScrollbar>
                </div>
            </div>
        </div>
    );
}
export default Admin;
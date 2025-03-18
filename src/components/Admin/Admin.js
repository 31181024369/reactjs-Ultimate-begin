import { useState } from "react";
import SideBar from "./SideBar";
import { FaHeart, FaBars } from 'react-icons/fa';
import './Admin.scss'
import { Outlet } from "react-router-dom";
import PerfectScrollbar from 'react-perfect-scrollbar'
const Admin=(props)=>{
    const [collapsed,setCollapsed]=useState(false);
    return (
        <div className="admin-container">
            <div className="admin-sidebar">
                <SideBar collapsed={collapsed}></SideBar>
            </div>
            <div className="admin-content">
                <div className="admin-header">
                <FaBars onClick={()=>setCollapsed(!collapsed)}></FaBars>
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
import { useState } from "react";
import SideBar from "./SideBar";
import { FaHeart, FaBars } from 'react-icons/fa';
import './Admin.scss'
const Admin=(props)=>{
    const [collapsed,setCollapsed]=useState(false);
    return (
        <div className="admin-container">
            <div className="admin-sidebar">
                <SideBar collapsed={collapsed}></SideBar>
            </div>
            <div className="admin-content">
                <FaBars onClick={()=>setCollapsed(!collapsed)}></FaBars>
                content goes here
            </div>
        </div>
    );
}
export default Admin;
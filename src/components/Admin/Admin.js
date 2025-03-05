import { useState } from "react";
import SideBar from "./SideBar";
import { FaHeart, FaBars } from 'react-icons/fa';
import './Admin.scss'
import { Outlet } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
                <Outlet></Outlet>
                </div>
                
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                />
            
        </div>
    );
}
export default Admin;
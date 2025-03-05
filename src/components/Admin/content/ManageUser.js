import { useState } from "react";
import ManageCreateUser from "./ManageCreateUser";
import { FcPlus } from "react-icons/fc";
import './ManageUser.scss';
const ManageUser=(props)=>{
    const [showModalCreateUser,setShowModalCreateUser]=useState(false);
    return (
        <div className="manage-user-container">
            <div className="title">
                Manage User
            </div>
            <div className="users-content">
                <div className="btn-add-new">
                    <button className="btn btn-primary" 
                    onClick={()=>setShowModalCreateUser(true)}
                    ><FcPlus></FcPlus>Add new users</button>
                </div>
                <div>
                    <div className="table-users-container">
                    table users
                    </div>
                    <ManageCreateUser 
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUser}

                    ></ManageCreateUser>
                </div>
            </div>
        </div>
    )
}
export default ManageUser;
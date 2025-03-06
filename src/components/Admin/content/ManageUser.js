import { useEffect, useState } from "react";
import ManageCreateUser from "./ManageCreateUser";
import { FcPlus } from "react-icons/fc";
import './ManageUser.scss';
import TableUser from "./TableUser";
import { getAllUsers } from "../../../services/apiService";
const ManageUser=(props)=>{
    const [showModalCreateUser,setShowModalCreateUser]=useState(false);
    const [listUsers,setListUsers]=useState([]);
    useEffect(()=>{
        fetchListUsers();
    },[])
    const fetchListUsers=async()=>{
        let res=await getAllUsers();
        if(res.EC===0){
            setListUsers(res.DT);
        }
    }

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
                        <TableUser listUsers={listUsers}></TableUser>
                    </div>
                    <ManageCreateUser
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUser}
                    fetchListUsers={fetchListUsers}
                    ></ManageCreateUser>
                </div>
            </div>
        </div>
    )
}
export default ManageUser;
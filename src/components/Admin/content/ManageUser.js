import { useEffect, useState } from "react";
import ManageCreateUser from "./ManageCreateUser";
import { FcPlus } from "react-icons/fc";
import './ManageUser.scss';
import TableUser from "./TableUser";
import { getAllUsers } from "../../../services/apiService";
import ManageUpdateUser from "./ManageUpdateUser";
const ManageUser=(props)=>{
    const [showModalCreateUser,setShowModalCreateUser]=useState(false);
    const [showModalUpdateUser,setShowModalUpdateUser]=useState(false);
    const [listUsers,setListUsers]=useState([]);
    const [dataUpdate,setDataUpdate]=useState({});
    useEffect(()=>{
        fetchListUsers();
    },[])
    const fetchListUsers=async()=>{
        let res=await getAllUsers();
        if(res.EC===0){
            setListUsers(res.DT);
        }
    }
    const handleClickBtnUpdate=(user)=>{
        setShowModalUpdateUser(true);
        setDataUpdate(user);
        console.log("data:",user);
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
                        <TableUser listUsers={listUsers}
                        handleClickBtnUpdate={handleClickBtnUpdate}
                        ></TableUser>
                    </div>
                    <ManageCreateUser
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUser}
                    fetchListUsers={fetchListUsers}
                    ></ManageCreateUser>
                    <ManageUpdateUser
                     show={showModalUpdateUser}
                     setShow={setShowModalUpdateUser}
                     dataUpdate={dataUpdate}
                    ></ManageUpdateUser>
                </div>
            </div>
        </div>
    )
}
export default ManageUser;
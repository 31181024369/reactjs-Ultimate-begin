import { useEffect, useState } from "react";
import ManageCreateUser from "./ManageCreateUser";
import { FcPlus } from "react-icons/fc";
import './ManageUser.scss';
import TableUser from "./TableUser";
import { getAllUsers,getUserWithPaginate } from "../../../services/apiService";
import ManageUpdateUser from "./ManageUpdateUser";
import ModalDeleteUser from "./ModalDeleteUser";
import TableUserPaginate from "./TableUserPaginate";
const ManageUser=(props)=>{
    const LIMIT_USER=3;
    const [currentPage,setCurrentPage]=useState(1);
    const [pageCount, setPageCount] = useState(0);
    const [showModalCreateUser,setShowModalCreateUser]=useState(false);
    const [showModalUpdateUser,setShowModalUpdateUser]=useState(false);
    const [listUsers,setListUsers]=useState([]);
    const [dataUpdate,setDataUpdate]=useState({});
    const [showModelDeleteUser,setShowModelDeleteUser]=useState(false);
    const [dataDelete,setDataDelete]=useState({});
    useEffect(()=>{
        // fetchListUsers();
        fetchListUsersWithPaginate(1);
    },[])
    const fetchListUsers=async()=>{
        let res=await getAllUsers();
        if(res.EC===0){
            setListUsers(res.DT);
        }
    }
    const fetchListUsersWithPaginate= async(page)=>{
        let res= await getUserWithPaginate(page,LIMIT_USER);
        if(res.EC===0){
            setListUsers(res.DT.users);
            setPageCount(res.DT.totalPages);
        }
    }
    const handleClickBtnUpdate=(user)=>{
        setShowModalUpdateUser(true);
        setDataUpdate(user);
        console.log("data:",user);
    }
    const resetUpdateData=()=>{
        setDataUpdate({});
    }
    const handleClickBtnDelete=(user)=>{
        setShowModelDeleteUser(true);
        setDataDelete(user);
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
                        {/* <TableUser listUsers={listUsers}
                        handleClickBtnUpdate={handleClickBtnUpdate}
                        handleClickBtnDelete={handleClickBtnDelete}
                        ></TableUser> */}
                        <TableUserPaginate listUsers={listUsers}
                         handleClickBtnUpdate={handleClickBtnUpdate}
                         handleClickBtnDelete={handleClickBtnDelete}
                         fetchListUsersWithPaginate={fetchListUsersWithPaginate}
                         pageCount={pageCount}
                         currentPage={currentPage}
                         setCurrentPage={setCurrentPage}
                        >
                        </TableUserPaginate>
                    </div>
                    <ManageCreateUser
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUser}
                    fetchListUsers={fetchListUsers}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    fetchListUsersWithPaginate={fetchListUsersWithPaginate}
                    ></ManageCreateUser>
                    <ManageUpdateUser
                     show={showModalUpdateUser}
                     setShow={setShowModalUpdateUser}
                     dataUpdate={dataUpdate}
                     fetchListUsers={fetchListUsers}
                     resetUpdateData={resetUpdateData}
                     currentPage={currentPage}
                     setCurrentPage={setCurrentPage}
                     fetchListUsersWithPaginate={fetchListUsersWithPaginate}
                    ></ManageUpdateUser>
                    <ModalDeleteUser
                    show={showModelDeleteUser}
                    setShow={setShowModelDeleteUser}
                    dataDelete={dataDelete}
                    fetchListUsers={fetchListUsers}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    fetchListUsersWithPaginate={fetchListUsersWithPaginate}
                    ></ModalDeleteUser>
                </div>
            </div>
        </div>
    )
}
export default ManageUser;
import React, { useState } from "react";
import './DisplayInfor.scss';
import logo from './../logo.svg';
const DisplayInfor=(props)=>{
    const {listUsers}=props;
    const [isShowHideListUser,setIsShowHideListUser]=useState(true);
    const handleShowHideListUser=()=>{
        setIsShowHideListUser(!isShowHideListUser);
    }
        return (
            <div className="display-infor-container">
                <div onClick={()=>handleShowHideListUser()}>
                    <span>
                        {isShowHideListUser===true?"Hide ListUser":"Show ListUser"}
                    </span>
                </div>
            {isShowHideListUser &&
            <>
                 {listUsers.map((items,index)=>{
                        return (
                            <div key={items.id} className={+items.age>18?"red":"green"}>
                                <div>My name is {items.name}</div>
                                <div>My age is {items.age}</div>
                                <div>
                                    <button onClick={()=>props.handleDeleteUser(items.id)}>delete</button>
                                </div>
                                <hr></hr>
                            </div>
                        )
            })}

            </>
            }
            </div>
        );
}
export default DisplayInfor
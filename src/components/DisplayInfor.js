import React from "react";
import './DisplayInfor.scss';
import logo from './../logo.svg';
const DisplayInfor=(props)=>{
    const {listUsers}=props;
        return (
            <div className="display-infor-container">
            {true &&
            <>
                 {listUsers.map((items,index)=>{
                        return (
                            <div key={items.id} className={+items.age>18?"red":"green"}>
                                <div>My name is {items.name}</div>
                                <div>My age is {items.age}</div>
                                <div>
                                    <button onClick={()=>this.props.handleDeleteUser(items.id)}>delete</button>
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
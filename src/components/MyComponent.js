import React from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";
class MyComponent extends React.Component{
    state={
        listUsers:[
            {id:1,name:"longhoang",age:24},
            {id:2,name:"lehoang",age:17},
            {id:3,name:"quangtrung",age:26}
        ]
    }
    handleAddNewUser=(userObject)=>{
        console.log("data",userObject);
        this.setState({
            listUsers:[userObject,...this.state.listUsers]
        });
    }
    render(){
        return (
            <div>
              <AddUserInfor handleAddNewUser={this.handleAddNewUser}></AddUserInfor>
              <br></br>
              <DisplayInfor  listUsers={this.state.listUsers}></DisplayInfor>
            </div>
        )
    }
}
export default MyComponent;
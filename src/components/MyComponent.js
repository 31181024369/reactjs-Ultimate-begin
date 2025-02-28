import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";
class MyComponent extends React.Component{
    state={
        listUsers:[
            {id:1,name:"longhoang",age:24},
            {id:2,name:"lehoang",age:17},
            {id:3,name:"quangtrung",age:26}
        ]
    }
    render(){
        return (
            <div>
              <UserInfor></UserInfor>
              <br></br>
              <DisplayInfor  listUsers={this.state.listUsers}></DisplayInfor>
            </div>
        )
    }
}
export default MyComponent;
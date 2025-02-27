import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";
class MyComponent extends React.Component{
    render(){
        return (
            <div>
              <UserInfor></UserInfor>
              <br></br>
              <DisplayInfor name="hoanglong" age="23"></DisplayInfor>
              <hr></hr>
             
            </div>
        )
    }
}
export default MyComponent;
import React from "react";
class DisplayInfor extends React.Component{
    state={
        isShowListUser:true
    }
    handleShowHide=()=>{
        this.setState({
            isShowListUser:!this.state.isShowListUser
        });
    }
    render(){
        const {listUsers}=this.props;
        return (
            <div>
            <div>
                <span onClick={()=>{this.handleShowHide()}}>
                    {this.state.isShowListUser===true?"Hide list user":"Show list user"}
                </span>
            </div>
            {this.state.isShowListUser &&
            <div>
                 {listUsers.map((items,index)=>{
                    
                        return (
                            <div key={items.id} className={+items.age>18?"red":"green"}>
                                <div>My name is {items.name}</div>
                                <div>My age is {items.age}</div>
                                <hr></hr>
                            </div>
                        )
                  
            })}

            </div>
            }
            </div>
        );
    }
}
export default DisplayInfor
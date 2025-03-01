import React from "react";
class AddUserInfor extends React.Component{
    state={
        name:'',
        address:'',
        age:''
    }
    handleClick=(event)=>{
        console.log("function click");
        this.setState({
            name:'longhoang',
            age:Math.floor((Math.random()*100)+1)
        })
    };
    handleOnChangeInput=(event)=>{
       this.setState({
        name:event.target.value
       });
    };
    handleOnSubmit=(event)=>{
        event.preventDefault();
        console.log(this.state);
        this.props.handleAddNewUser({
            id:Math.floor((Math.random()*100)+1)+'-ramdom',
            name:this.state.name,
            age:this.state.age
        });
    };
    handleOnChangeAge=(event)=>{
        this.setState({
            age:event.target.value
        });
    }
    render(){
        return (
            <div>
                   my name is {this.state.name} and age :{this.state.age}
               <button onClick={(event)=>this.handleClick(event)}>click</button>
               <form onSubmit={(event)=>this.handleOnSubmit(event)}>
                    <label>Name:</label>
                    <input type="text" value={this.state.name} onChange={(event)=>this.handleOnChangeInput(event)} ></input>
                    <lable>Age:</lable>
                    <input type="text"  value={this.state.age} onChange={(event)=>this.handleOnChangeAge(event)}></input>
                    <button>Submit</button>
               </form>
            </div>
        )
    }
    
}
export default AddUserInfor
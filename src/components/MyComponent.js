import React from "react";
class MyComponent extends React.Component{
    state={
        name:'haryPhamDev',
        address:'hoidanit',
        age:26
    }
    handleClick=(event)=>{
        console.log("function click");
        this.setState({
            name:'longhoang',
            age:Math.floor((Math.random()*100)+1)
        })
    };
    render(){
        return (
            <div>
               my name is {this.state.name} and age :{this.state.age}
               <button onClick={(event)=>this.handleClick(event)}>click</button>
            </div>
        )
    }
}
export default MyComponent;
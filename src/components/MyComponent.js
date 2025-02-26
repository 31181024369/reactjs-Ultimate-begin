import React from "react";
class MyComponent extends React.Component{
    state={
        name:'haryPhamDev',
        address:'hoidanit',
        age:26
    }
    handleClick(event){
        console.log("function click");
    };
    render(){
        return (
            <div>
               my name is {this.state.name} and age :{this.state.age}
               <button onClick={this.handleClick}>click</button>
            </div>
        )
    }
}
export default MyComponent;
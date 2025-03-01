import React, { useState } from "react";
// class AddUserInfor extends React.Component{
//     state={
//         name:'',
//         address:'',
//         age:''
//     }
//     handleClick=(event)=>{
//         console.log("function click");
//         this.setState({
//             name:'longhoang',
//             age:Math.floor((Math.random()*100)+1)
//         })
//     };
//     handleOnChangeInput=(event)=>{
//        this.setState({
//         name:event.target.value
//        });
//     };
//     handleOnSubmit=(event)=>{
//         event.preventDefault();
//         console.log(this.state);
//         this.props.handleAddNewUser({
//             id:Math.floor((Math.random()*100)+1)+'-ramdom',
//             name:this.state.name,
//             age:this.state.age
//         });
//     };
//     handleOnChangeAge=(event)=>{
//         this.setState({
//             age:event.target.value
//         });
//     }
//     render(){
//         return (
//             <div>
//                    my name is {this.state.name} and age :{this.state.age}
//                <button onClick={(event)=>this.handleClick(event)}>click</button>
//                <form onSubmit={(event)=>this.handleOnSubmit(event)}>
//                     <label>Name:</label>
//                     <input type="text" value={this.state.name} onChange={(event)=>this.handleOnChangeInput(event)} ></input>
//                     <lable>Age:</lable>
//                     <input type="text"  value={this.state.age} onChange={(event)=>this.handleOnChangeAge(event)}></input>
//                     <button>Submit</button>
//                </form>
//             </div>
//         )
//     }
    
// }
const AddUserInfor=(props)=>{
    const [name,setName]=useState('');
    const [age,setAge]=useState('');
    const [address,setAddress]=useState('');
    const handleClick=(event)=>{
        setName('longhoang');
        setAge(Math.floor((Math.random()*100)+1));
        
    };
    const handleOnChangeInput=(event)=>{
        setName(event.target.value);
      
    };
    const handleOnSubmit=(event)=>{
        event.preventDefault();
       
        props.handleAddNewUser({
            id:Math.floor((Math.random()*100)+1)+'-ramdom',
            name:name,
            age:age
        });
    };
    const handleOnChangeAge=(event)=>{
        setAge(event.target.value);
    }

return (
    <div>
            my name is {name} and age :{age}
            <button onClick={(event)=>handleClick(event)}>click</button>
            <form onSubmit={(event)=>handleOnSubmit(event)}>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(event)=>handleOnChangeInput(event)} ></input>
                    <lable>Age:</lable>
                    <input type="text"  value={age} onChange={(event)=>handleOnChangeAge(event)}></input>
                    <button>Submit</button>
            </form>
    </div>
)
}
export default AddUserInfor
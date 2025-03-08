import { useState } from 'react';
import './Login.scss';
const Login=(props)=>{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const handleLogin=()=>{
        alert('login');
    }
    return (
        <div className="login-container">
            <div className="header">
                Don't have an account yet?
            </div>
            <div className="title col-4 mx-auto">
                HoiDanIt
            </div>
            <div className="welcome col-4 mx-auto">
                Hello who's this?
            </div>
            <div className="content-form col-4 mx-auto">
            <div className='form-group'>
                    <lable>Email</lable>
                    <input type="email"
                     className="form-control"
                     value={email}
                     onChange={(event)=>setEmail(event)}
                     
                     ></input>
                </div>
                <div className='form-group'>
                    <lable>Password</lable>
                    <input type="password"
                     className="form-control"
                     value={password}
                     onChange={(event)=>setPassword(event)}
                  
                     ></input>
                </div>
                <span>Forget password?</span>
                <div>
                    <button onClick={()=>{handleLogin()}}><span>Login to HoiDanIT</span></button>
                </div>
                <div className='text-center'>
                    <span className='back'>&#60;&#60;Go to Homepage</span>
                </div>
            </div>
        </div>
    );
}
export default Login
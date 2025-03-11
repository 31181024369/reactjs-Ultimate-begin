import { useState } from 'react';
import './Login.scss';
import { useNavigate } from "react-router-dom";
import { postLogin } from '../../services/apiService';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { doLogin } from '../../redux/action/userAction';
import { ImSpinner10 } from "react-icons/im";
const Login=(props)=>{
    const navigate=useNavigate();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [isLoading,setIsLoading]=useState(false);
    const dispatch=useDispatch();
    const handleLogin=async()=>{
        setIsLoading(true);
        let data=await postLogin(email,password);
        console.log("data",data);
        if(data && data.EC===0){
            dispatch(doLogin(data));
            toast.success(data.EM);
            setIsLoading(false);
            navigate('/');
        }
        if(data && data.EC!==0){
            toast.error(data.EM);
            setIsLoading(false);
        }
    }
    return (
        <div className="login-container">
            <div className="header">
                Don't have an account yet?
                <button onClick={()=>{navigate('/register')}}>Sign up</button>
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
                     onChange={(event)=>setEmail(event.target.value)}
                     
                     ></input>
                </div>
                <div className='form-group'>
                    <lable>Password</lable>
                    <input type="password"
                     className="form-control"
                     value={password}
                     onChange={(event)=>setPassword(event.target.value)}
                     ></input>
                </div>
                <span>Forget password?</span>
                <div>
                    <button  disabled={isLoading} onClick={()=>handleLogin()}  ><span> {isLoading===true && <ImSpinner10 className="loaderIcon"/> }Login to HoiDanIT</span></button>
                </div>
                <div className='text-center'>
                    <span className='back' onClick={()=>{navigate('/')}}>&#60;&#60;Go to Homepage</span>
                </div>
            </div>
        </div>
    );
}
export default Login
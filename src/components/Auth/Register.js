import { useState } from 'react';
import './Register.scss';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { postRegister } from '../../services/apiService';
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";
import Language from '../Header/Language';
const Register=(props)=>{
    const navigate=useNavigate();
    const [email,setEmail]=useState("");
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const [isShowPassword,setIsShowPassword]=useState(false);
    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };
    const handleRegister=async()=>{
        const isValidateEmail=validateEmail(email);
        if(!isValidateEmail){
            toast.error('invalid email');
            return ;
        }
        if(!password){
            toast.error('invalid password');
            return ;
        }
        let data=await postRegister(email,username,password);
        if(data && data.EC===0){
            toast.success(data.EM);
            navigate('/login');
        }
        if(data && data.EC!==0){
            toast.error(data.EM);
        }
    }

    return (
        <div className='register-content'>
            <div className='header'>
                <span>Already have an account?</span>
                <button onClick={()=>{navigate('/login')}}>Log in</button>
                <Language></Language>
            </div>
            <div className='title col-4 mx-auto'>
                <h2>Hỏi Dân IT & Eric</h2>
                <h4>Start your journey?</h4>
            </div>
            <div className='content-form col-4 mx-auto'>
                <div class="form-group">
                    <label for="email">Email address:</label>
                    <input type="email"
                    class="form-control"
                     value={email}
                     onChange={(event)=>setEmail(event.target.value)}
                      />
                </div>
                <div class="form-group pass-group">
                    <label for="pwd">Password:</label>
                    <input type={isShowPassword? "text":"password"} class="form-control"
                    value={password}
                    onChange={(event)=>setPassword(event.target.value)}
                     />
                     {isShowPassword ?
                      <span className='icons-eye'
                      onClick={()=>setIsShowPassword(false)}
                      ><VscEye /></span> :
                      <span className='icons-eye'
                      onClick={()=>setIsShowPassword(true)}
                      ><VscEyeClosed /></span>}
                </div>
                <div class="form-group">
                    <label for="email">Username:</label>
                    <input type="username" class="form-control"
                    value={username}
                    onChange={(event)=>setUsername(event.target.value)}
                     />
                </div>
                <div>
                        <button
                        onClick={()=>handleRegister()}
                        ><span>Create my free account</span></button>
                </div>
                <div className='text-center'>
                    <span className='back'>&#60;&#60;Go to Homepage</span>
                </div>
            </div>
        </div>
    )

}
export default Register;
import { useState } from "react";
import "./MangageQuiz.scss";
import Select from 'react-select';
import { postCreateNewQuiz } from "../../../../services/apiService";
import { toast } from 'react-toastify';
import TableQuiz from "./TableQuiz";
import Accordion from 'react-bootstrap/Accordion';
const options = [
    { value: 'EASY', label: 'EASY' },
    { value: 'MEDIUM', label: 'MEDIUM' },
    { value: 'HARD', label: 'HARD' }
  ]
const MangageQuiz=(props)=>{
    const [name,setName]=useState('');
    const [description,setDescription]=useState('');
    const [type,setType]=useState('EASY');
    const [image,setImage]=useState(null);
    const handleChangeFile=(event)=>{
        if(event.target &&event.target.files && event.target.files[0]){
            setImage(event.target.files[0]);
        }
    }
    const handleSubmitQuiz=async()=>{
        if(!name || !description)
        {
            toast.error('Name/Description is required');
            return;
        }
        let res=await postCreateNewQuiz(description,name,type?.value,image);
        if(res && res.EC===0){
            toast.success(res.EM);
            setName('');
            setDescription('');
            setImage(null);
        }else{
            toast.error(res.EM);
        }
    }

    return (
        <div className="quiz-container">
             <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>MangageQuiz</Accordion.Header>
        <Accordion.Body>
        <div className="add-new">
                <fieldset className='border rounded-3 p-3'>
                    <legend>Add new Quiz:</legend>
                    <div className="form-floating mb-3">
                    <input type="text"
                     value={name}
                     onChange={(event)=>setName(event.target.value)}
                      className="form-control"
                       placeholder="your quiz name" />
                    <label >Name</label>
                    </div>
                    <div className="form-floating">
                        <input type="text"
                         className="form-control"
                         value={description}
                         onChange={(event)=>setDescription(event.target.value)}
                         />
                        <label >Description</label>
                    </div>
                    <div className="my-3">
                    <Select
                    defaultValue={type}
                    onChange={setType}
                     options={options}
                     placeholder={"Quiz type..."} />
                    </div>
                    <div className="more-actions form-group">
                        <lable className="mb-1">Upload Image</lable>
                        <input type="file" onChange={(event)=>handleChangeFile(event)} className="form-control"  />

                    </div>
                    <div className="mt-3">
                        <button
                        onClick={()=>handleSubmitQuiz()}
                        className="btn btn-warning">Save</button>
                    </div>

                </fieldset>
            </div>
        </Accordion.Body>
      </Accordion.Item>
            </Accordion>
            <div className="list-detail">
                <TableQuiz></TableQuiz>
            </div>
        </div>
    );
}
export default MangageQuiz;
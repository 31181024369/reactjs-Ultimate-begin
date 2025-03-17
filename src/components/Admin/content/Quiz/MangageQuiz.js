import { useState } from "react";
import "./MangageQuiz.scss";
import Select from 'react-select';

const options = [
    { value: 'EASY', label: 'EASY' },
    { value: 'MEDIUM', label: 'MEDIUM' },
    { value: 'HARD', label: 'HARD' }
  ]
const MangageQuiz=(props)=>{
    const [name,setName]=useState('');
    const [description,setDescription]=useState('');
    const [style,setStyle]=useState('EASY');
    const [image,setImage]=useState(null);
    const handleChangeFile=()=>{

    }

    return (
        <div className="quiz-container">
            <div className="title">
                MangageQuiz
            </div>
            <hr></hr>
            <div className="add-new">
                <fieldset className='border rounded-3 p-3'>
                    <legend>Add new Quiz:</legend>
                    <div className="form-floating mb-3">
                    <input type="text"
                     value={name}
                     onChange={(event)=>setImage(event.target.value)}
                      className="form-control"
                       placeholder="your quiz name" />
                    <label >Name</label>
                    </div>
                    <div className="form-floating">
                        <input type="password"
                         className="form-control"
                         value={description}
                         onChange={(event)=>setDescription(event.target.value)}
                         />
                        <label >Description</label>
                    </div>
                    <div className="my-3">
                    <Select value={style} options={options} placeholder={"Quiz type..."} />
                    </div>
                    <div className="more-actions form-group">
                        <lable className="mb-1">Upload Image</lable>
                        <input type="file" onChange={(event)=>handleChangeFile(event)} className="form-control"  />

                    </div>

                </fieldset>
            </div>
        </div>
    );
}
export default MangageQuiz;
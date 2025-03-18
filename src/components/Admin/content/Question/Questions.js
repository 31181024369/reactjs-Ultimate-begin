import { useState } from "react";
import "./Questions.scss";
import Select from 'react-select';
import { BsPlusSquareFill } from "react-icons/bs";
import { BsFillFileMinusFill } from "react-icons/bs";
import { RiImageAddFill } from "react-icons/ri";
const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];
const Questions=(props)=>{
    const [selectedQuiz, setSelectedQuiz] = useState({});
    return (
        <div className="questions-container">
            <div className="title">
                Manage Question
            </div>
            <div className="add-new-question">
                <div className="col-6 form-group">
                    <label>Select Quiz:</label>
                    <Select
                    defaultValue={selectedQuiz}
                    onChange={setSelectedQuiz}
                    options={options}
                    />
                </div>
                <div className='mt-3 mb-2'>
                    Add questions:
                </div>
                <div className='questions-content'>
                    <div className="form-floating description">
                        <input type="text"
                         class="form-control"
                          placeholder="description"
                           />
                        <label >Description</label>
                    </div>
                    <div className='group-upload'>
                        <lable >
                            <RiImageAddFill className='label-up' />
                        </lable>
                        <input type={'file'} hidden />
                        <span>0 file uploaded</span>
                    </div>
                    <div className='btn-add'>
                        <span>
                            <BsPlusSquareFill className='icon-add'  />
                        </span>
                        <span>
                            <BsFillFileMinusFill className='icon-remove'  />
                        </span>
                    </div>
                </div>
                <div className='anwers-content'>
                        <input 
                        type="checkbox"
                        className="form-check-input iscorrect"
                        />
                       
                        <div className="form-floating description anwser-name">
                        <input type="text"
                         class="form-control"
                          placeholder="description"
                           />
                        <label >Answer 1</label>
                    </div>
                        <div className='btn-group'>
                            <span>
                                <BsPlusSquareFill className='icon-add'  />
                            </span>
                            <span>
                                <BsFillFileMinusFill className='icon-remove'  />
                            </span>
                        </div>
                </div>
            </div>
        </div>
    );
}
export default Questions;
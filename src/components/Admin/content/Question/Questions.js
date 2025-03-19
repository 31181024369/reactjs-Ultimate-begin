import { useState } from "react";
import "./Questions.scss";
import Select from 'react-select';
import { BsPlusSquareFill } from "react-icons/bs";
import { BsFillFileMinusFill } from "react-icons/bs";
import { RiImageAddFill } from "react-icons/ri";
import { v4 as uuidv4 } from 'uuid';
import _ from 'lodash';
const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];
const Questions=(props)=>{
    const [selectedQuiz, setSelectedQuiz] = useState({});
    const [questions,setQuestions]=useState([
        {
            id:uuidv4(),
            description:'question 1',
            imageFile:'',
            imageName:'',
            answers:[
                {
                    id:uuidv4(),
                    description:'answers 1.1',
                    isCorrect:false
                },
                {
                    id:uuidv4(),
                    description:'answers 1.2',
                    isCorrect:false
                }
            ]
        },
        
    ])
    console.log("data:",questions);
    const handleAddRemoveQuestion=(type,id)=>{
        if(type=="ADD"){
            const newQuestion={
                id:uuidv4(),
                description:'',
                imageFile:'',
                imageName:'',
                answers:[
                {
                    id:uuidv4(),
                    description:'',
                    isCorrect:false
                }
            ]
            }
            setQuestions([...questions,newQuestion]);
        }
        if(type=="REMOVE"){
            let questionClone=_.cloneDeep(questions);;
            questionClone=questionClone.filter(item=>item.id!=id);
            setQuestions(questionClone);
        }

    }
    const handleAddRemoveAnswer=(type,questionId, anwserId)=>{
        let questionsClone=_.cloneDeep(questions);
        if(type==='ADD'){
            const newAnswer={
                id:uuidv4(),
                description:'',
                isCorrect:false
            };
            let index=questionsClone.findIndex(item=>item.id===questionId);
            console.log("questionId Add",index);
            questionsClone[index].answers.push(newAnswer);
            setQuestions(questionsClone);
        }
        if(type==='REMOVE'){
           
            let index=questionsClone.findIndex(item=>item.id===questionId);
            console.log("questionId REMOVE",index);
            questionsClone[index].answers=questionsClone[index].answers.filter(item=>item.id!==anwserId);
            setQuestions(questionsClone);
        }
    }
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
                    options={options}let
                    />
                </div>
                <div className='mt-3 mb-2'>
                    Add questions:
                </div>
                {questions && questions.length>0 && questions.map((question,index)=>{
                    return (
                        <div key={question.id} className="q-main mb-5">
                        <div className='questions-content'>
                            <div className="form-floating description">
                                <input type="text"
                                class="form-control"
                                placeholder="description"
                                value={question.description}
                                />
                                <label >Question {index+1} 's description</label>
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
                                    <BsPlusSquareFill onClick={()=>handleAddRemoveQuestion('ADD','')} className='icon-add'  />
                                </span>
                                <span>
                                    {questions.length>1 && <BsFillFileMinusFill onClick={()=>handleAddRemoveQuestion('REMOVE',question.id)} className='icon-remove'  />}
                                    
                                </span>
                            </div>
                        </div>
                        {question.answers && question.answers.length>0 &&
                         question.answers.map((answer,index)=>{
                            return (
                                <div key={answer.id} className='anwers-content'>
                                <input
                                type="checkbox"
                                className="form-check-input iscorrect"

                                />
                                <div className="form-floating description anwser-name">
                                <input type="text"
                                class="form-control"
                                placeholder="description"
                                value={answer.description}
                                />
                                <label >Answer {index+1}</label>
                            </div>
                                <div className='btn-group'>
                                    <span>
                                        <BsPlusSquareFill 
                                        onClick={()=>handleAddRemoveAnswer('ADD',question.id,'')}
                                        className='icon-add'
                                          />
                                    </span>
                                    {question.answers.length>1 && <span>
                                        <BsFillFileMinusFill
                                        onClick={()=>handleAddRemoveAnswer('REMOVE',question.id,answer.id)}
                                         className='icon-remove'  />
                                    </span>}
                                    
                                </div>
                        </div>
                            );
                         })

                         };
                    </div>
                    );
                })}
               
            </div>
        </div>
    );
}
export default Questions;
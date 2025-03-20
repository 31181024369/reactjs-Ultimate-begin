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
            description:'',
            imageFile:'',
            imageName:'',
            answers:[
                {
                    id:uuidv4(),
                    description:'',
                    isCorrect:false
                },
              
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
    const handleOnChange=(type,questionId,value)=>{
        if(type==='QUESTION'){
            let questionClone=_.cloneDeep(questions);
            let index=questionClone.findIndex((item)=>item.id===questionId);
            if(index>-1){
                questionClone[index].description=value;
                setQuestions(questionClone);
            }
        }

    }
    const handleOnChangeFileQuestion=(questionId,event)=>{
        let questionClone=_.cloneDeep(questions);
        let index=questionClone.findIndex(item=>item.id===questionId);
        if(index>-1 && event.target &&event.target.files && event.target.files[0]){
            questionClone[index].imageFile=event.target.files[0];
            questionClone[index].imageName=event.target.files[0].name;
            setQuestions(questionClone);
        }
        console.log('questions',questions);
    }
    const handleAnswerQuestion=(type,answerId,questionId,value)=>{
        let questionClone=_.cloneDeep(questions);
        let index=questionClone.findIndex(item=>item.id===questionId);
        if(index>-1){
            questionClone[index].answers=
            questionClone[index].answers.map(answer=>{
                if(answer.id===answerId){
                    if(type==='CHECKBOX'){
                        answer.isCorrect=true
                    }
                    if(type==='INPUT'){
                        answer.description=value;
                    }
                }
                return answer;
            });
            setQuestions(questionClone);

        }
    }
    const handleSubmitQuestionForQuiz=()=>{
        alert(1);
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
                                className="form-control"
                                placeholder="description"
                                value={question.description}
                                onChange={(event)=>handleOnChange('QUESTION',question.id,event.target.value)}
                                />
                                <label >Question {index+1} 's description</label>
                            </div>
                            <div className='group-upload'>
                                <label htmlFor={`${question.id}`} >
                                    <RiImageAddFill className='label-up' />
                                </label>
                                <input
                                id={`${question.id}`}
                                onChange={(event)=>handleOnChangeFileQuestion(question.id,event)}
                                type={'file'}
                                // className="form-control"
                                  hidden
                                   />
                                <span>{ question.imageName ? question.imageName :'0 file uploaded'}</span>
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
                                checked={answer.isCorrect}
                                onChange={(event)=>handleAnswerQuestion('CHECKBOX',answer.id,question.id,event.target.checked)}

                                />
                                <div className="form-floating description anwser-name">
                                <input type="text"
                                 onChange={(event)=>handleAnswerQuestion('INPUT',answer.id,question.id,event.target.value)}
                                 className="form-control"
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
                {questions && questions .length >0 && 
                    <div>
                        <button 
                        onClick={()=>handleSubmitQuestionForQuiz()}
                        className="btn btn-warning">
                            Save Questions
                        </button>
                    </div>
                }
            </div>
        </div>
    );
}
export default Questions;
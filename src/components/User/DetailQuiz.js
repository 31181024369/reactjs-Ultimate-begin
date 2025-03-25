
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getDataQuiz, postSubmitQuiz } from "../../services/apiService";

import "./DetailQuiz.scss";
import _ from 'lodash';
import Question from "./Question";
import ModalResult from "./ModalResult";
import RightContent from "./Content/RightContent";
const DetailQuiz=(props)=>{
    const params=useParams();
    const location=useLocation();
    const quizId=params.id;
    const [dataQuiz,setDataQuiz]=useState([]);
    const [index,setIndex]=useState(0);
    const [isShowModalResult,setIsShowModalResult]=useState(false);
    const [dataModalResult,setDataModalResult]=useState({});
    useEffect(()=>{
        fetchQuestions();
    },[quizId]);
    const fetchQuestions=async()=>{
        let res=await getDataQuiz(quizId);
        if(res && res.EC===0){
            let raw=res.DT;
            let data=_.chain(raw)
            .groupBy("id")
            .map((value, key)=>{
                let answers=[];
                let questionDescription,image=null;

                value.forEach((item,index)=>{
                    if(index===0){
                        questionDescription=item.description;
                        image=item.image;
                    }
                    item.answers.isSelected=false;
                    answers.push(item.answers);
                })
                return { questionId:key, answers, questionDescription, image}
            }).value();
            setDataQuiz(data);
        }
    }
    const handlePrev=()=>{
        if(index-1<0) return;
        setIndex(index-1);
    }
    const handleNext=()=>{
        if(dataQuiz && dataQuiz.length>=index+1){
            setIndex(index+1);
        }
    }
    const handleFinishQuiz=async()=>{
        
        console.log("data before submit :",dataQuiz);
        let payload={
            quizId:+quizId,
            answers:[]
        };
        let answers=[];
        if(dataQuiz && dataQuiz.length>0){
            dataQuiz.forEach(question=>{
                let questionId=question.questionId;
                let userAnswerId=[];
                question.answers.forEach(a=>{
                    if(a.isSelected===true){
                        userAnswerId.push(a.id);
                    }
                });
                answers.push({
                    questionId:+questionId,
                    userAnswerId:userAnswerId
                })
            })
            payload.answers=answers;
            //console.log("data submit :",payload);
            let res=await postSubmitQuiz(payload);
            if(res && res.EC===0){
                setDataModalResult({
                    countCorrect:res.DT.countCorrect,
                    countTotal:res.DT.countTotal,
                    quizData:res.DT.quizData
                });
                setIsShowModalResult(true);
            }else{
                alert('somethine wrongs...');
            }
           
        }
    }
    const handleCheckoutbox=(answerId,questionId)=>{
        let dataQuizClone=_.cloneDeep(dataQuiz);
        let question=dataQuizClone.find(item=>+item.questionId===+questionId)
        if(question && question.answers){
            question.answers=question.answers.map(item=>{
                if(+item.id===+answerId){
                    item.isSelected=!item.isSelected;
                }
                return item;
            })
            // question.answers=b;
        }
        let index=dataQuizClone.findIndex(item=>+item.questionId===+questionId);
        if(index>-1){
            dataQuizClone[index]=question;
            setDataQuiz(dataQuizClone);
        }
        console.log("data:",dataQuizClone);
    }
    return (
        <div className="detail-quiz-container">
            <div className="left-content">
                <div className="title">
                    Quiz {quizId} :{location?.state?.quizTitle}
                </div>
                <div className="q-body">
                </div>
                <div className="q-content">
                    <Question handleCheckoutbox={handleCheckoutbox}  index={index} data={dataQuiz && dataQuiz.length>0 ?dataQuiz[index]:[]}></Question>
                </div>
                <div className="footer">
                    <button onClick={()=>handlePrev()} className="btn btn-primary">Prev</button>
                    <button onClick={()=>handleNext()} className="btn btn-secondary">Next</button>
                    <button onClick={()=>handleFinishQuiz()} className="btn btn-warning">Finish</button>
                </div>
            </div>
            <div className="right-content">
                <RightContent
                dataQuiz={dataQuiz}
                 handleFinishQuiz={handleFinishQuiz}
                 setIndex={setIndex}
                 ></RightContent>
            </div>
            <ModalResult
            show={isShowModalResult}
            setShow={setIsShowModalResult}
            dataModalResult={dataModalResult}
            ></ModalResult>
        </div>
    );
}
export default DetailQuiz;
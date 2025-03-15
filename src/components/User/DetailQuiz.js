
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getDataQuiz } from "../../services/apiService";
import "./DetailQuiz.scss";
import _ from 'lodash';
import Question from "./Question";
const DetailQuiz=(props)=>{
    const params=useParams();
    const location=useLocation();
    const quizId=params.id;
    const [dataQuiz,setDataQuiz]=useState([]);
    const [index,setIndex]=useState(0);
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
    return (
        <div className="detail-quiz-container">
            <div className="left-content">
                <div className="title">
                    Quiz {quizId} :{location?.state?.quizTitle}
                </div>
                <div className="q-body">
                </div>
                <div className="q-content">
                    <Question index={index} data={dataQuiz && dataQuiz.length>0 ?dataQuiz[index]:[]}></Question>
                </div>
                <div className="footer">
                    <button onClick={()=>handlePrev()} className="btn btn-primary">Prev</button>
                    <button onClick={()=>handleNext()} className="btn btn-secondary">Next</button>
                </div>
            </div>
            <div className="right-content">
                count down
            </div>
        </div>
    );
}
export default DetailQuiz;
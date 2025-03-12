import { useEffect, useState } from "react";
import { getQuizByUser } from "../../services/apiService";
import "./ListQuiz.scss";
const ListQuiz=(props)=>{
    const [arrQuiz,setArrQuiz]=useState([]);
    useEffect(()=>{
        getQuizData();
    },[]);
    const getQuizData=async()=>{
        const res= await getQuizByUser();
        console.log("data:",arrQuiz);
        if(res && res.EC===0){
            setArrQuiz(res.DT);
        }
    }
    return (
        <div className="list-quiz-container container">
            {arrQuiz && arrQuiz.length>0  && arrQuiz.map((quiz,index)=>{
                return (
                    <div className="card" key={`${index}-quiz`} style={{width: "18rem"}}>
                    <img src={`data:image/png;base64,${quiz.image}`} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">quiz {index+1}</h5>
                        <p className="card-text">{quiz.description}ss</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                    </div>
                )
            })}
            {arrQuiz && arrQuiz.length===0 &&
                <div>
                    You don't have any quiz now...
                </div>
            }
        </div>
    );
}
export default ListQuiz;
import _ from 'lodash';
import { useState } from 'react';
import Lightbox from "react-awesome-lightbox";
const Question=(props)=>{
    const {data,index,handleCheckoutbox}=props;
    const [isPreviewImage,setIsPreviewImage]=useState(false);
    if(_.isEmpty(data)){
        return (
            <></>
        );
    }
    const handleCheckBox=(event,aId,qId)=>{
        //console.log("check:",event.target.checked);
          console.log("prod:",aId,qId);
        handleCheckoutbox(aId,qId);

    }
    return (
        <>
        {data.image ?
            <div className='q-image'>
                <img
                onClick={()=>setIsPreviewImage(true)}
                src={`data:image/png;base64,${data.image}`}/>
                 {isPreviewImage===true && <Lightbox
                
                                image={`data:image/png;base64,${data.image}`}
                                onClose={()=>setIsPreviewImage(false)}
                                title={"Question Image"} />}
            </div>
            :
            <div className='q-image'>
            </div>
         }
             <div className="question">Question {index+1}:{data.questionDescription}?</div>
                <div className="answer">
                    {data.answers && data.answers.length && data.answers.map((a,index)=>{
                        return (
                            <div className="a-child" key={`answer-${index}`}>
                            <div className="form-check">
                            <input onChange={(event)=>handleCheckBox(event,a.id,data.questionId)} className="form-check-input" type="checkbox"checked={a.isSelected} value="" id="flexCheckDefault" />
                            <label className="form-check-label" for="flexCheckDefault">
                                {a.description}
                            </label>
                            </div>
                            </div>
                        )
                    })}
                </div>
        </>
    );
}
export default Question;
import _ from 'lodash';
const Question=(props)=>{
    const {data,index}=props;
    if(_.isEmpty(data)){
        return (
            <></>
        );
    }
    return (
        <>
        {data.image &&
            <div className='q-image'>
                <img src={`data:image/png;base64,${data.image}`}/>
            </div>
         }
           
             <div className="question">Question {index+1}:{data.questionDescription}?</div>
                <div className="answer">
                    {data.answers && data.answers.length && data.answers.map((a,index)=>{
                        return (
                            <div className="a-child" key={`answer-${index}`}>
                            <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">
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
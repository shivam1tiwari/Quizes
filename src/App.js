import "./App.css";
import QUESTION from "./utils/question1";
import { useRef, useState } from "react";
import Timer from "./componenets/Timer";

/**
* App component - Show the  Question and result summary
*/
const App = () => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [answer, setAnswer] = useState([]);
  const ref = useRef("");
  
  const uniqueIndex = new Set();
    while (uniqueIndex.size < 10) {
      const random = Math.floor(Math.random() * (QUESTION.length));
      uniqueIndex.add(random);
    }
       
  let randomQuestion = [];
        [...uniqueIndex].forEach(ind=> randomQuestion.push(QUESTION[ind]))
     
  const handleQuestion = (answer) => {
    setAnswer((prev) => {
      return [...prev, answer];
    });
    setQuestionNumber((prev) => {
      let newNumber = prev;
      newNumber++;
      return newNumber;
    });
  };

  const handleRadio = (e)=>{
    console.log(e.target.dataset.id)
    ref.current = e.target.dataset.id
    console.log("raju",ref.current)
  }

  const handleNext =()=>{

    if(ref.current!==""){
      console.log(ref.current)
      handleQuestion(JSON.parse(ref.current));
      ref.current = ""
    }

    if(ref.current===""){
      console.log("current 0")
    handleQuestion({
      id: `${randomQuestion[questionNumber].id}`,
      answer: null,
      index: null,
    })}
  }

  if (questionNumber > 9) {
    const result = {
      totalScore: 0,
      skipped: 0,
    };

    answer.forEach((val) =>
      QUESTION.forEach((ans) => {

        if (val.id === ans.id) {

          if (val.isCorrect) {
            result.totalScore = result.totalScore + 1;
          }

          if (val.answer === null) {
            result.skipped = result.skipped + 1;
          }
        }
      })
    );
    return (
      <div className="container">
        <h1 className="heading">Quiz Completed</h1>
        <h3 className="total-mark">Total Mark - {result.totalScore}</h3>
        <div className="result">
          <p className="result__content green">Correct {result.totalScore}</p>
          <p className="result__content yellow"> Skipped {result.skipped}</p>
          <p className="result__content red">
            Wrong {answer.length - (result.totalScore + result.skipped)}
          </p>
        </div>
        {answer.map((val) =>
          QUESTION.map((ans) => {
            if (val.id === ans.id) {
              return (
                <div className="quiz__card" key={val.id}>
                  <div className=" question__text-box">
                    <p className="question__text">
                      {ans.id.substring(0, 1).toLocaleUpperCase()}.
                    </p>
                    <p className="question__text"> {ans.text}</p>
                  </div>
                  <ol>
                    {ans.answers.map((answ,i) =>{
                      return ( <li
                        className={
                          val.option==answ.option&&val.isCorrect?
                            "option-1 green"
                              :val.option==answ.option&&!val.isCorrect?"option-1 red":"option-1"
                        }
                        key={i}
                      > {console.log(answ.isCorrect,"checking")}
                      {(answ.isCorrect)?<span className="radio-disable">&#9989;</span>:(val.option===answ.option&&!val.isCorrect)?<span className="radio-disable">&#10060;</span>:<span></span> }
                      <span className="radio-disable">{answ.option}</span>
                      </li>
                    )})}
                  </ol>
                </div>
              );
            }
          })
        )}
      </div>
    );
  }

  return (
    <div className="App">
      <h1 className="heading">Quizes</h1>
      <div className="question__container">
        <div className="question__option">
        <h3>Mark : 1</h3>
          <div className="show-timer">
          <p>
            {randomQuestion[questionNumber].id
              .substring(0, 1)
              .toLocaleUpperCase()}
            . {randomQuestion[questionNumber].text}
          </p><span className={"timer__container"}>
        <span>Time : </span>
        <Timer
          key={questionNumber}
          interval={questionNumber}
          handleInterval={() =>
            handleQuestion({
              id: `${randomQuestion[questionNumber].id}`,
              answer: null,
              index: null,
            })
          }
        />
      </span>
      </div>
          <ol>
            {randomQuestion[questionNumber].answers.map((answer,i) =>(
              <li
                className="option"
                key={answer.id+i}
              > 
                <input className="radio-input" onChange={(e)=>handleRadio(e)} type="radio" name={answer.id} value={answer.option} data-id ={JSON.stringify(answer)} ></input>
                {answer["option"]}
              </li>
            ))}
          </ol>
          
        </div>
        <button className="next-button" onClick={()=>handleNext()} >Next</button>
      </div>
    </div>
  );
};

export default App;

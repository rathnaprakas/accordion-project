import Question from "./question";
import questions from "./data";

import './index.css';

let App=()=> {
  return (
    <div className="container">
      <h3>Questions</h3>
      <div className="info">
      {questions.map(i=><Question title={i.title} info={i.info}/>)}
      </div>
    </div>
  );
}

export default App;
import { useState } from 'react';
import data from './data';
import SingleQuestion from './components/SingleQuestion';

const App = () => {
  const [questions, setQuestions] = useState(data);
  // const questionMapping = question.map((q) => {
  //   const { id, title, info } = q;
  //   return (
  //     <div key={id} className="question">
  //       <header>
  //         <h5>{title}</h5>
  //         <button className="question-btn" onClick={() => console.log(info)}>
  //           <FaPlus />
  //         </button>
  //       </header>
  //     </div>
  //   );
  // });

  return (
    <main>
      <div className="container">
        <h1>Questions</h1>
        <SingleQuestion questions={questions} />
        {/* {questionMapping} */}
      </div>
    </main>
  );
};
export default App;

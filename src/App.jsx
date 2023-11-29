import { useState } from 'react';
import { FaPlus } from 'react-icons/fa6';
import questions from './data';

const App = () => {
  const [question, setQuestion] = useState(questions);
  const questionMapping = question.map((q) => {
    const { id, title, info } = q;
    return (
      <div key={id} className="question">
        <header>
          <h5>{title}</h5>
          <button className="question-btn" onClick={() => console.log(info)}>
            <FaPlus />
          </button>
        </header>
      </div>
    );
  });

  return (
    <main>
      <div className="container">
        <h1>Questions</h1>
        {questionMapping}
      </div>
    </main>
  );
};
export default App;

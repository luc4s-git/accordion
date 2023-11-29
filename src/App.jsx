import { useState } from 'react';
import questions from './data';

const App = () => {
  const [question, setQuestion] = useState(questions);
  const questionMapping = question.map((q) => {
    const { id, title, info } = q;
    return (
      <div key={id}>
        <h1>{title}</h1>
        <button className="question-btn"></button>
      </div>
    );
  });

  return (
    <main>
      <div className="container">{questionMapping}</div>
    </main>
  );
};
export default App;

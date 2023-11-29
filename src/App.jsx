import { useState } from 'react';
import data from './data';
import SingleQuestion from './components/SingleQuestion';

const App = () => {
  const [questions, setQuestions] = useState(data);

  return (
    <main>
      <div className="container">
        <h1>Questions</h1>
        <SingleQuestion questions={questions} />
      </div>
    </main>
  );
};
export default App;

import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa6';

export default function SingleQuestion({ questions }) {
  const questionsMapping = questions.map((question) => {
    const { id, title, info } = question;
    const [showInfo, setShowInfo] = useState(false);

    return (
      <div className="question" key={id}>
        <header>
          <h5>{title}</h5>
          <button
            className="question-btn"
            onClick={() => {
              setShowInfo(!showInfo);
            }}
          >
            {showInfo ? <FaMinus /> : <FaPlus />}
          </button>
        </header>
        <p>{showInfo && info}</p>
      </div>
    );
  });
  return <>{questionsMapping}</>;
}

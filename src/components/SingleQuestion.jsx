import { FaPlus } from 'react-icons/fa6';

export default function SingleQuestion({ questions }) {
  const questionsMapping = questions.map((question) => {
    const { id, title, info } = question;
    return (
      <div className="question" key={id}>
        <header>
          <h5>{title}</h5>
          <button className="question-btn">
            <FaPlus></FaPlus>
          </button>
        </header>
      </div>
    );
  });
  return <>{questionsMapping}</>;
}

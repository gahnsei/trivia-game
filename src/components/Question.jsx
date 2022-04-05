import useRandomAnswers from "../utils/useRandomAnswers";

const Question = (props) => {
  const {
    correct_answer,
    incorrect_answers,
    question,
    selectedButton,
    selectedAnswer,
    isSubmited
  } = props;

  const randomAnwersOrder = useRandomAnswers(incorrect_answers, correct_answer);

  return (
    <div className="question-container">
      <span className="question">{question}</span>
      <br />
      {randomAnwersOrder.map((answer) => (
        <button
          key={answer}
          className={`answers ${
            isSubmited
              ? correct_answer === answer
                ? `correct-answer`
                : selectedAnswer === answer
                ? `incorrect-answer`
                : ``
              : selectedAnswer === answer
              ? `selected-answer`
              : ``
          }`}
          onClick={!isSubmited ? () => selectedButton(question, answer) : null}
        >
          {answer}
        </button>
      ))}
    </div>
  );
};

export default Question;

import useGameManager from "../utils/useGameManager";
import Question from "./Question";
const Quiz = (props) => {
  const { questions, selectedButton, checkAnswers, isSubmited } =
    useGameManager();

  const { newGame } = props;

  let score = 0;
  questions.forEach((ele) => {
    if (ele.correct_answer === ele.selectedAnswer) {
      score++;
    }
  });

  return (
    <div className="quiz-container">
      {questions.map((ele) => (
        <Question
          key={ele.question}
          {...ele}
          selectedButton={selectedButton}
          isSubmited={isSubmited}
        />
      ))}
      {isSubmited && (
        <span className="quiz-score">You scored {score}/5 correct answers</span>
      )}
      <button
        className="submit-button"
        onClick={isSubmited ? newGame : checkAnswers}
      >
        {isSubmited ? `Play Again` : `Check Answers`}
      </button>
    </div>
  );
};

export default Quiz;

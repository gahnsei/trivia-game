import { useNavigate } from "react-router";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="homepage">
      <div className="quiz-start-container">
        <h1 className="quiz-start-title">Quizzical</h1>
        <h2 className="quiz-start-description">Test your knowledge</h2>
        <button className="quiz-start-button" onClick={() => navigate("/quiz")}>
          Start quiz
        </button>
      </div>
    </div>
  );
};

export default HomePage;

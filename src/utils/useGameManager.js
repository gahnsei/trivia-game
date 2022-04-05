import { useState, useEffect } from "react";
import axios from "axios";

const useGameManager = () => {
  const [isSubmited, setIsSubmited] = useState(false);
  const [questions, setQuestion] = useState(
    () => JSON.parse(localStorage.getItem("questions")) || []
  );

  const checkAnswers = () => {
    setIsSubmited(true);
  };

  useEffect(() => {
    const func = async () => {
      if (questions.length > 0) return;
      const res = await axios.get(`https://opentdb.com/api.php?amount=5`);
      const data = res.data.results;
      setQuestion(() => {
        localStorage.setItem("questions", JSON.stringify(data));
        setQuestion(data);
      });
    };
    func();
  }, []);

  const selectedButton = (question, answer) => {
    setQuestion((prevState) => {
      const oldQuestion = prevState.find((ele) => ele.question === question);
      const index = prevState.indexOf(oldQuestion);
      oldQuestion.selectedAnswer = answer;
      const updatedQuestions = [...prevState];
      updatedQuestions.splice(index, 1, oldQuestion);
      localStorage.setItem("questions", JSON.stringify(updatedQuestions));
      return updatedQuestions;
    });
  };

  return {
    questions,
    setQuestion,
    selectedButton,
    isSubmited,
    checkAnswers
  };
};

export default useGameManager;

import { useState, useEffect } from "react";

const useRandomAnswers = (incorrect_answers, correct_answer) => {
  const [randomAnswers, setRandomAnswers] = useState([]);

  useEffect(() => {
    const randomAnwersOrder = [...incorrect_answers];
    const randNumber = Math.floor(
      Math.random() * (randomAnwersOrder.length + 1)
    );
    randomAnwersOrder.splice(randNumber, 0, correct_answer);
    setRandomAnswers(randomAnwersOrder);
  }, []);

  return randomAnswers;
};

export default useRandomAnswers;

import { useState } from "react";
import Quiz from "./Quiz";

const TriviaGame = () => {
  const [game, setGame] = useState(1);

  const newGame = () => {
    localStorage.removeItem(`questions`);
    setGame((prevGame) => prevGame + 1);
  };

  return <Quiz key={game} newGame={newGame} />;
};

export default TriviaGame;

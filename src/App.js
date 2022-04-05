import { Routes, Route } from "react-router";
import HomePage from "./components/HomePage";
import TriviaGame from "./components/TriviaGame";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quiz" element={<TriviaGame />} />
      </Routes>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import StartScreen from './StartScreen';
import Quiz from './Quiz';
import QuestionSelectionScreen from './QuestionSelectionScreen';
import quizData from '../data/quizData';

function App() {
  const [gameState, setGameState] = useState('start'); // 'start', 'selection', 'quiz'
  const [score, setScore] = useState(0);
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(null);

  const startGame = () => {
    setScore(0);
    setGameState('selection');
  };

  const selectQuestion = (index) => {
    setSelectedQuestionIndex(index);
    setGameState('quiz');
  };

  const endGame = () => {
    setGameState('selection');
  };

  const restartGame = () => {
    setGameState('start');
  };

  return (
    <div className="App">
      {gameState === 'start' && <StartScreen startGame={startGame} />}
      {gameState === 'selection' && (
        <QuestionSelectionScreen quizData={quizData} selectQuestion={selectQuestion} />
      )}
      {gameState === 'quiz' && (
        <Quiz
          endGame={endGame}
          incrementScore={() => setScore(score + 1)}
          quizData={quizData}
          currentQuestionIndex={selectedQuestionIndex}
          restartGame={restartGame}
        />
      )}
    </div>
  );
}

export default App;

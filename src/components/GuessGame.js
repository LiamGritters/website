import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

const GuessGame = ({ answer, successMessage }) => {
  const [result, setResult] = useState('');
  const [userInput, setUserInput] = useState('');
  const [attempts, setAttempts] = useState(0); // Track attempts

  useEffect(() => {
    // You can handle any setup here if needed.
  }, []);

  const checkGuess = () => {
    const userGuess = userInput.trim().toLowerCase(); // Normalize the input

    // Increment attempts on each guess
    setAttempts(attempts + 1);

    if (userGuess === answer.toLowerCase()) {
      setResult(successMessage || '🎉 Correct! You solved it!'); // Display success message if provided
    } else {
      setResult(`Oops! Try again. Attempts: ${attempts}`); // Show attempts count when guess is wrong
    }
  };

  return (
    <div id="game" style={{ textAlign: 'center', padding: '20px' }}>
      <h2 style={{ fontSize: '2em', marginBottom: '20px' }}>Input your answer below</h2>
      <input
        type="text"
        id="user-input"
        value={userInput}
        onChange={e => setUserInput(e.target.value)}
        placeholder="Type your guess here"
        style={{
          fontSize: '1.5em',
          padding: '10px',
          width: '100%',
          maxWidth: '400px',
          margin: '10px 0',
        }}
      />
      <button
        onClick={checkGuess}
        style={{
          fontSize: '1.5em',
          padding: '12px 20px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          width: '100%',
          maxWidth: '400px',
        }}>
        Submit Guess
      </button>
      <p id="result" style={{ fontSize: '1.2em', marginTop: '20px' }}>
        {result}
      </p>
    </div>
  );
};

// Add PropTypes validation
GuessGame.propTypes = {
  answer: PropTypes.string.isRequired,
  successMessage: PropTypes.string,
};

export default GuessGame;

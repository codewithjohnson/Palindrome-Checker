import React from "react";

const Home = () => {
  return (
    <div className="Home">
      <h2>Palindrome Checker</h2>
      <p className="definition">
        A palindrome is a word, sentence, verse, or even number that reads the same backward or forward.
      </p>
      <div className="input_container">
        <label htmlFor="input" className="label">
          Enter a text
        </label>
        <input type="text" name="input" id="input" className="input" />
      </div>
      <div className="display">
        <p>Lorem ipsum dolor sit amet.</p>
        <button>Check</button>
      </div>
      <div className="result">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores?</p>
      </div>
    </div>
  );
};

export default Home;

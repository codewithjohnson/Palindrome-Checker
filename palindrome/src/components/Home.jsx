import React from "react";
import { useState } from "react";

const Home = () => {
  const [value, setValue] = useState("");
  const [res, setRes] = useState("");

  const HandleClick = () => {
    if (value !== "") {
      let reversedInput = value
        .toLowerCase()
        .replace(/[^A-Z0-9]/gi, "")
        .split("")
        .reverse()
        .join("");
      let filteredInput = value.toLowerCase().replace(/[^A-Z0-9]/gi, "");
      if (filteredInput === reversedInput) {
        setRes(`😎, ${value}, is a palindrome`);
        console.log("IT IS");
      } else {
        setRes(`🥱, ${value} is not a palindrome`);
        console.log("IT IS NOT");
      }
    }
  };

  return (
    <div className="Home">
      <h2>Palindrome Checker</h2>
      <p className="definition">
        A palindrome is a word, sentence, verse, or even number that reads the
        same backward or forward.
      </p>
      <div className="input_container">
        <label htmlFor="input" className="label">
          Enter a text
        </label>
        <input
          type="text"
          name="input"
          id="input"
          className="input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div className="display">
        <div className="pre">
          Examples :<p className="play">madam, ada, did, noon, mum, refer</p>
        </div>

        <button onClick={HandleClick}>Check</button>
      </div>
      <div className="result">
        <div className="result-btn">RESULT</div>
        <p>{res}</p>
      </div>
    </div>
  );
};

export default Home;

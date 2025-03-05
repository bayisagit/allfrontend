import React, { useState } from "react";

const App = () => {
  const [input, setInput] = useState("");

  // Handle button clicks
  const handleClick = (value) => {
    if (value === "=") {
      try {
        setInput(eval(input).toString()); // Evaluate expression
      } catch {
        setInput("Error");
      }
    } else if (value === "AC") {
      setInput(""); // Clear input
    } else if (value === "DE") {
      setInput(input.slice(0, -1)); // Delete last character
    } else {
      setInput(input + value); // Append input
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-700 p-5">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
        {/* Display */}
        <div className="bg-gray-200 p-4 rounded-lg text-right text-2xl font-semibold mb-4">
          {input || "0"}
        </div>

        {/* Buttons Grid */}
        <div className="grid grid-cols-4 gap-2">
          {["AC", "DE", ".", "/"].map((btn) => (
            <button
              key={btn}
              className="btn bg-red-500"
              onClick={() => handleClick(btn)}
            >
              {btn}
            </button>
          ))}

          {["7", "8", "9", "*"].map((btn) => (
            <button key={btn} className="btn" onClick={() => handleClick(btn)}>
              {btn}
            </button>
          ))}

          {["4", "5", "6", "+"].map((btn) => (
            <button key={btn} className="btn" onClick={() => handleClick(btn)}>
              {btn}
            </button>
          ))}

          {["1", "2", "3", "-"].map((btn) => (
            <button key={btn} className="btn" onClick={() => handleClick(btn)}>
              {btn}
            </button>
          ))}

          {["00", "0", "="].map((btn) => (
            <button
              key={btn}
              className={`btn ${btn === "=" ? "col-span-2 bg-green-500" : ""}`}
              onClick={() => handleClick(btn)}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;

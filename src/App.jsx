import "./App.css";
import "./font.css";
import { useState } from "react";

function App() {
  const [prevInput, setPrevInput] = useState("");
  const [currentInput, setCurrentInput] = useState("");

  const operators = ["/", "*", "+", "-", "."];

  const updatePrevInput = (value) => {
    if (
      (operators.includes(value) && currentInput === "") ||
      (operators.includes(value) && operators.includes(currentInput.slice(-1)))
    ) {
      return;
    }
    setCurrentInput(currentInput + value);
    if (operators.includes(value)) {
      setPrevInput(prevInput + currentInput + value);
      setCurrentInput("");
    }
  };

  return (
    <div className="calculator-grid">
      <div className="output-screen">
        <div className="prev-input"> {prevInput} </div>
        <div className="current-input">{currentInput || ""} </div>
      </div>
      <button className="span-two red">AC</button>
      <button className="del">DEL</button>
      <button onClick={() => updatePrevInput("/")}>÷</button>
      <button onClick={() => updatePrevInput("7")}>7</button>
      <button onClick={() => updatePrevInput("8")}>8</button>
      <button onClick={() => updatePrevInput("9")}>9</button>
      <button onClick={() => updatePrevInput("*")}>*</button>
      <button onClick={() => updatePrevInput("4")}>4</button>
      <button onClick={() => updatePrevInput("5")}>5</button>
      <button onClick={() => updatePrevInput("6")}>6</button>
      <button onClick={() => updatePrevInput("+")}>+</button>
      <button onClick={() => updatePrevInput("1")}>1</button>
      <button onClick={() => updatePrevInput("2")}>2</button>
      <button onClick={() => updatePrevInput("3")}>3</button>
      <button onClick={() => updatePrevInput("-")}>-</button>
      <button onClick={() => updatePrevInput("0")}>0</button>
      <button onClick={() => updatePrevInput(".")}>.</button>
      <button className="orange span-two">=</button>
    </div>
  );
}

export default App;

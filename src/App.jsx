import "./App.css";
import "./font.css";

function App() {
  return (
    <div className="calculator-grid">
      <div className="output-screen">
        <div className="prev-input">550 + </div>
        <div className="current-input">600</div>
      </div>
      <button className="span-two red">AC</button>
      <button className="del">DEL</button>
      <button>÷</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>*</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>+</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>-</button>
      <button>0</button>
      <button>.</button>
      <button className="orange span-two">=</button>
    </div>
  );
}

export default App;

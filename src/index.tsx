import React, { useState } from "react";
import ReactDOM from "react-dom";
import useCalculator from "./useCalculatro";
import "./index.css";

function App() {
  const { state, actions } = useCalculator();

  return (
    <div className="app">
      <h1 className="app__title">Calculator</h1>

      <div className="app__number-inputs">
        <input
          className="number-inputs__number-1"
          onChange={(e) => actions.setNumber1(Number(e.target.value))}
          type="number"
          placeholder="0"
        />
        <input
          className="number-inputs__number-2"
          onChange={(e) => actions.setNumber2(Number(e.target.value))}
          type="number"
          placeholder="0"
        />
      </div>

      <button
        className="app__addition-button"
        onClick={() => actions.onAdd()}
        onKeyUp={() => actions.onAdd()}
      >
        sumar
      </button>
      <button
        className="app__addition-button"
        onClick={() => actions.onSubtract()}
        onKeyUp={() => actions.onSubtract()}
      >
        restar
      </button>
      <button
        className="app__addition-button"
        onClick={() => actions.onMultiply()}
        onKeyUp={() => actions.onMultiply()}
      >
        mutiplicar
      </button>
      <button
        className="app__addition-button"
        onClick={() => actions.onDivide()}
        onKeyUp={() => actions.onDivide()}
      >
        dividir
      </button>

      <h2>{state.total}</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

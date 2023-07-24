import { useState } from "react";
import styles from "./Calculator.module.css";
const Calculator = () => {
  const [inputValue, setInputValue] = useState("0");

  const onClickHandler = (value) => {
    if (inputValue == "0" && value != ".") {
      setInputValue(value);
    } else {
      setInputValue((pre) => pre + value);
    }
  };

  const calculateResult = () => {
    setInputValue(eval(inputValue).toString());
  };

  const clearAll = () => {
    setInputValue("0");
  };
  return (
    <div className={styles.mainBox}>
      <h1>Calculator</h1>
      <div className={styles.calculator}>
        <input type="text" value={inputValue} readOnly />
        <div className={styles.buttons}>
          <button disabled>m</button>
          <button disabled>cc</button>
          <button disabled>%</button>
          <button onClick={() => clearAll()}>C</button>
          <button onClick={() => onClickHandler("7")}>7</button>
          <button onClick={() => onClickHandler("8")}>8</button>
          <button onClick={() => onClickHandler("9")}>9</button>
          <button onClick={() => onClickHandler("/")}>/</button>
          <button onClick={() => onClickHandler("4")}>4</button>
          <button onClick={() => onClickHandler("5")}>5</button>
          <button onClick={() => onClickHandler("6")}>6</button>
          <button onClick={() => onClickHandler("*")}>*</button>
          <button onClick={() => onClickHandler("1")}>1</button>
          <button onClick={() => onClickHandler("2")}>2</button>
          <button onClick={() => onClickHandler("3")}>3</button>
          <button onClick={() => onClickHandler("-")}>-</button>
          <button onClick={() => onClickHandler("0")}>0</button>
          <button onClick={() => onClickHandler(".")}>.</button>
          <button onClick={calculateResult}>=</button>
          <button onClick={() => onClickHandler("+")}>+</button>
        </div>
      </div>
    </div>
  );
};
export default Calculator;

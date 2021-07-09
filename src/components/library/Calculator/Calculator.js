import React, { useState } from "react";
import TitleBar from "../Common/TitleBar";
import Display from "./Display";
import Buttons from "./Buttons";
import "./style.scss";
export default function Calculator(props) {
  const { startDragging } = props;
  const [decimalOp1, setDecimal1] = useState(false);
  const [decimalOp2, setDecimal2] = useState(false);
  const [op1, changeOperand1] = useState(null);
  const [operator, changeOperator] = useState(null);
  const [op2, changeOperand2] = useState(null);
  const [error, setError] = useState(null);
  const [ans, setAnswer] = useState(null);
  const reset = () => {
    changeOperand1(null);
    changeOperand2(null);
    changeOperator(null);
    setAnswer(null);
    setDecimal1(false);
    setDecimal2(false);
    setError(null);
  };
  const calculateAnswer = () => {
    let n1 = op1 === null ? 0 : parseFloat(op1);
    let n2 = op2 === null ? 0 : parseFloat(op2);
    let ans;
    switch (operator) {
      case "/":
        if (n2 === 0) {
          setError("Can't divide by 0");
          break;
        }
        ans = n1 / n2;
        break;
      case "x":
        ans = n1 * n2;
        break;
      case "-":
        ans = n1 - n2;
        break;
      case "+":
        ans = n1 + n2;
        break;
      default:
        ans = 0;
    }
    if (decimalOp1 || decimalOp2) setAnswer(ans.toFixed(1));
    else setAnswer(Math.floor(ans));
  };
  const btnClicked = (val, type) => {
    if (ans) {
      if (type === "NUMBER") {
        changeOperand2(null);
        changeOperator(null);
        setDecimal1(false);
        setDecimal2(false);
        changeOperand1(val !== "0" ? val : null);
      } else if (type === "DECIMAL") {
        changeOperand2(null);
        changeOperator(null);
        setDecimal1(true);
        setDecimal2(false);
        changeOperand1("0.");
      } else if (type === "SYMBOL") {
        changeOperand1(ans);
        changeOperand2(null);
        changeOperator(val);
        setAnswer(null);
        setDecimal1(decimalOp1 || decimalOp2);
        setDecimal2(false);
      } else if (type === "NEGATIVE") {
        changeOperand1(-ans);
        changeOperand2(null);
        changeOperator(null);
        setAnswer(null);
        setDecimal1(decimalOp1 || decimalOp2);
        setDecimal2(false);
      } else if (type === "SQR") {
        changeOperand1(ans);
        changeOperand2(null);
        changeOperator("sqr");
        setAnswer(Math.pow(ans, 2));
        return;
      }
    }
    if (type === "NUMBER") {
      if (!operator) {
        if (op1 === null) {
          if (val !== "0") {
            changeOperand1(val);
          }
        } else {
          changeOperand1(op1 + val);
        }
      } else {
        if (op2 === null) {
          if (val !== "0") {
            changeOperand2(val);
          }
        } else {
          changeOperand2(op2 + val);
        }
      }
    } else {
      if (type === "CLEAR") {
        reset();
      } else if (type === "NEGATIVE") {
        if (!operator) {
          changeOperand1(-op1);
        } else {
          changeOperand2(-op2);
        }
      } else if (type === "DECIMAL") {
        if (!operator) {
          if (!decimalOp1) {
            setDecimal1(true);
            changeOperand1(!op1 ? "0." : op1 + ".");
          }
        } else {
          if (!decimalOp2) {
            setDecimal2(true);
            changeOperand2(!op2 ? "0." : op2 + ".");
          }
        }
      } else if (type === "SYMBOL") {
        changeOperand2(null);
        changeOperator(val);
      } else if (type === "SQR") {
        if (op1 === null) {
          changeOperand1(0);
        }
        changeOperator("sqr");
        setAnswer(Math.pow(op1, 2));
        changeOperand2(0);
      } else if (type === "ANS" && operator !== "sqr") {
        calculateAnswer();
      }
    }
  };
  let row1, row2;
  if (operator === "sqr") {
    row1 = op1 + " * " + op1 + " =";
    console.log(op1);
    row2 = ans;
  } else if (!operator) {
    row2 = op1 === null ? 0 : op1;
  } else {
    if (ans) {
      row1 =
        (op1 === null ? 0 : op1) +
        " " +
        operator +
        " " +
        (op2 === null ? 0 : op2) +
        " =";
      row2 = ans;
    } else {
      row1 = (op1 === null ? 0 : op1) + " " + operator;
      row2 = op2 === null ? 0 : op2;
    }
  }
  return (
    <div className="container">
      <TitleBar
        label="Calculator"
        theme="dark"
        resizing={false}
        startDragging={startDragging}
      />
      <Display row1={error ? error : row1} row2={error ? "Error" : row2} />
      <Buttons btnClicked={btnClicked} />
    </div>
  );
}

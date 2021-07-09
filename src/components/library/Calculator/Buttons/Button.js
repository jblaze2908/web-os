import React from "react";

export default function Button(props) {
  const { label, faded, gold, btnClicked, type } = props;
  const clickHandler = () => {
    btnClicked(label, type);
  };
  return (
    <div
      onClick={clickHandler}
      className={
        "calcbtn " +
        (faded ? "calcbtn-faded " : "") +
        (gold ? "calcbtn-gold " : "")
      }
    >
      {label === "sqr" ? (
        <React.Fragment>
          x<sup>2</sup>
        </React.Fragment>
      ) : (
        label
      )}
    </div>
  );
}

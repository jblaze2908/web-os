import React from "react";
import "./styles.scss";
import Button from "./Button";
export default function Buttons(props) {
  const { btnClicked } = props;
  return (
    <div className="calcbtns__container">
      <Button btnClicked={btnClicked} type="CLEAR" label="C" faded={true} />
      <Button
        btnClicked={btnClicked}
        type="NEGATIVE"
        label="+/-"
        faded={true}
      />
      <Button btnClicked={btnClicked} type="SQR" label="sqr" faded={true} />
      <Button
        btnClicked={btnClicked}
        label="/"
        type="SYMBOL"
        faded={true}
        gold={true}
      />
      <Button btnClicked={btnClicked} type="NUMBER" label="8" />
      <Button btnClicked={btnClicked} type="NUMBER" label="9" />
      <Button btnClicked={btnClicked} type="NUMBER" label="7" />
      <Button btnClicked={btnClicked} label="x" type="SYMBOL" gold={true} />
      <Button btnClicked={btnClicked} type="NUMBER" label="5" />
      <Button btnClicked={btnClicked} type="NUMBER" label="6" />
      <Button btnClicked={btnClicked} type="NUMBER" label="4" />
      <Button btnClicked={btnClicked} label="-" type="SYMBOL" gold={true} />
      <Button btnClicked={btnClicked} type="NUMBER" label="1" />
      <Button btnClicked={btnClicked} type="NUMBER" label="2" />
      <Button btnClicked={btnClicked} type="NUMBER" label="3" />
      <Button btnClicked={btnClicked} label="+" type="SYMBOL" gold={true} />
      <Button btnClicked={btnClicked} type="NUMBER" label="0" />
      <Button btnClicked={btnClicked} label="" />
      <Button btnClicked={btnClicked} label="." type="DECIMAL" />
      <Button btnClicked={btnClicked} label="=" type="ANS" gold={true} />
    </div>
  );
}

import React, { useState } from "react";
import ReactAce from "react-ace";
import "../../Common/AceEditorTheme/dark";
import "../../Common/AceEditorTheme/light";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-c_cpp";
import FontInc from "../../../../assets/svg/font+.svg";
import FontDec from "../../../../assets/svg/font-.svg";
import Sun from "../../../../assets/svg/sun.svg";
import Moon from "../../../../assets/svg/moon.svg";
import "./style.scss";
export default function CodeEditor(props) {
  const [lang, changeLang] = useState("java");
  const [code, setEditorVal] = useState("");
  const [showLangSelector, switchLangSelector] = useState(false);
  const [fontSize, changeFontSize] = useState(14);
  const { darkMode, toggleDarkMode, runCode, running } = props;
  const toggleLangSelector = () => {
    if (!running) switchLangSelector(!showLangSelector);
  };
  const execCode = () => {
    runCode(lang, code);
  };
  return (
    <div className="codeeditor__container">
      <ReactAce
        height="calc(100% - 2.5rem)"
        fontSize={fontSize}
        width="100%"
        mode={lang === "c++" ? "c_cpp" : lang}
        value={code}
        readOnly={running}
        onChange={(val) => {
          if (!running) setEditorVal(val);
        }}
        theme={darkMode ? "dark" : "light"}
        showPrintMargin={false}
      />
      <div className="codeeditor__toolbar">
        <div className="codeeditor__lang-selector">
          <div className="codeeditor__lang-selector-label">Language :</div>
          <div className="codeeditor__lang-selector-select">
            <div
              className="codeeditor__lang-selector-select-value"
              onClick={toggleLangSelector}
            >
              {lang}
            </div>
            <div
              className={
                "codeeditor__lang-selector-select-options-container" +
                (showLangSelector
                  ? " codeeditor__lang-selector-select-options-container-open"
                  : "")
              }
            >
              <div className="codeeditor__lang-selector-select-options-container-arrow" />
              <div className="codeeditor__lang-selector-select-options">
                <div
                  className={
                    "codeeditor__lang-selector-select-option" +
                    (lang === "java"
                      ? " codeeditor__lang-selector-select-option-active"
                      : "")
                  }
                  onClick={() => {
                    changeLang("java");
                    switchLangSelector(false);
                  }}
                >
                  Java
                </div>
                <div
                  className={
                    "codeeditor__lang-selector-select-option" +
                    (lang === "c++"
                      ? " codeeditor__lang-selector-select-option-active"
                      : "")
                  }
                  onClick={() => {
                    changeLang("c++");
                    switchLangSelector(false);
                  }}
                >
                  C++
                </div>
                <div
                  className={
                    "codeeditor__lang-selector-select-option" +
                    (lang === "python"
                      ? " codeeditor__lang-selector-select-option-active"
                      : "")
                  }
                  onClick={() => {
                    changeLang("python");
                    switchLangSelector(false);
                  }}
                >
                  Python
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="codeeditor__font">
          <div
            className="codeeditor__font-btn"
            onClick={() => {
              changeFontSize(fontSize - 1);
            }}
          >
            <img src={FontDec} alt="" />
          </div>
          <div
            className="codeeditor__font-btn"
            onClick={() => {
              changeFontSize(fontSize + 1);
            }}
          >
            <img src={FontInc} alt="" />
          </div>
        </div>
        <div className="codeeditor__darkMode-toggle" onClick={toggleDarkMode}>
          <img src={darkMode ? Moon : Sun} alt="" />
        </div>
        <div
          className="codeeditor__runcode"
          onClick={running || code === "" ? null : execCode}
        >
          {running ? "Running..." : "Run Code"}
        </div>
      </div>
    </div>
  );
}

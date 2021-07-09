import React, { useState, useEffect } from "react";
import TitleBar from "../Common/TitleBar";
import CodeEditor from "./CodeEditor";
import Axios from "axios";
import Spinner from "./Spinner";
import "./style.scss";
export default function Ide(props) {
  let interval;
  const { startDragging, maximize, minimize, maximized } = props;
  const [darkMode, setDarkMode] = useState(true);
  const [inpVal, setInpVal] = useState("");
  const [outVal, setOutVal] = useState("");
  const [running, setRunning] = useState(false);
  useEffect(() => {
    return () => {
      clearInterval(interval);
    };
  }, []);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const runCode = (lang, code) => {
    let langCode;
    if (lang === "java") langCode = 62;
    else if (lang === "python") langCode = 71;
    else langCode = 53;
    setOutVal("");
    setRunning(true);
    const options = {
      method: "POST",
      url: "https://judge0-ce.p.rapidapi.com/submissions",
      params: { base64_encoded: "false", fields: "*" },
      headers: {
        "content-type": "application/json",
        "x-rapidapi-key": "1bb34cd955msh215d243a99234d6p148a5djsn5710ae044576",
        "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
      },
      data: {
        language_id: langCode,
        source_code: code,
        stdin: inpVal,
      },
    };
    Axios.request(options).then((res) => {
      interval = setInterval(() => {
        getSubmission(res.data.token);
      }, 1000);
    });
  };
  const getSubmission = (token) => {
    const options = {
      method: "GET",
      url: `https://judge0-ce.p.rapidapi.com/submissions/${token}`,
      params: { base64_encoded: "false", fields: "*" },
      headers: {
        "x-rapidapi-key": "1bb34cd955msh215d243a99234d6p148a5djsn5710ae044576",
        "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
      },
    };

    Axios.request(options)
      .then((res) => {
        let statusId = res.data.status.id;
        if (statusId !== 1 && statusId !== 2) {
          clearInterval(interval);
          showResults(res.data);
        }
      })
      .catch((error) => {
        clearInterval(interval);
        console.error(error);
      });
  };
  const showResults = (data) => {
    let statusId = data.status.id;
    setRunning(false);
    if (statusId === 3) setOutVal(data.stdout);
    else if (statusId === 5) setOutVal("Time Limit Exceeded");
    else if (statusId === 6)
      setOutVal("Compilation Error : \n" + data.compile_output);
    else if (statusId === 10 || statusId === 11 || statusId === 12)
      setOutVal(data.stderr);
  };
  return (
    <div
      className={
        "ide__container" + (maximized ? " ide__container-maximized" : "")
      }
    >
      <TitleBar
        label="Ide"
        theme="dark"
        maximized={maximized}
        maximize={maximize}
        resizing={true}
        minimize={minimize}
        startDragging={startDragging}
      />
      <div className="ide__content">
        <div className="ide__content-partition" />

        <div className="ide__content-left">
          <CodeEditor
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}
            runCode={runCode}
            running={running}
          />
        </div>
        <div className="ide__content-partition" />
        <div className="ide__content-right">
          <div
            className={
              "ide__content-right-input" +
              (darkMode ? " ide__content-right-input-dark" : "")
            }
          >
            <textarea
              name="input"
              placeholder="stdin"
              value={inpVal}
              onChange={(e) => {
                setInpVal(e.target.value);
              }}
            ></textarea>
          </div>
          <div className="ide__content-right-partition" />
          <div
            className={
              "ide__content-right-output" +
              (darkMode ? " ide__content-right-output-dark" : "")
            }
          >
            <textarea
              name="output"
              value={outVal}
              readOnly={true}
              placeholder="stdout"
            ></textarea>
            {running ? (
              <div className="spinner-container">
                <Spinner />
              </div>
            ) : null}
          </div>
          <div className="ide__content-right-toolbar">
            Powered by{" "}
            <a href="https://github.com/judge0/judge0" target="__blank">
              Judge0
            </a>
          </div>
        </div>
        <div className="ide__content-partition" />
      </div>
    </div>
  );
}

import React from "react";
import Generalinfo from "./components/Generalinfo/Generalinfo";
import Education from "./components/Education/Education";
import Workhistory from "./components/Workhistory/Workhistory";
import "./App.css";

const App = (props) => {
  return (
    <div className="main-container">
      <div className="content">
        <Generalinfo />

        <h1 className="section-header">Education</h1>
        <Education />

        <h1 className="section-header">Work History</h1>
        <Workhistory />
      </div>
    </div>
  );
};

export default App;

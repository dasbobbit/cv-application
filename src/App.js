import React, { Component } from "react";
import Generalinfo from "./components/Generalinfo/Generalinfo";
import Education from "./components/Education/Education";
import Workhistory from "./components/Workhistory/Workhistory";
import "./App.css";

class App extends Component {
  constructor() {
    super()
    this.state = {
      eduList: {
        school: [],
        from: [],
        to: [],
        description: [],
      },

    }
  }

  render() {

    // const eduItems = this.state.eduList.map(item => <)

    return (
      <div className="main-container">
        <div class="content">
        <Generalinfo />

        <h1 className="section-header">Education</h1>
        <Education />
        
        <h1 className="section-header">Work History</h1>
        <Workhistory />
        </div>
      </div>
    );
  }
}

export default App;
import React, { Component } from "react";
import Generalinfo from "./components/Generalinfo/Generalinfo";
import Education from "./components/Education/Education";
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
        <h1>Personal Information</h1>
        <Generalinfo />

        <h1>Education</h1>
        <Education />
        
        <h1>Work History</h1>
      </div>
    );
  }
}

export default App;
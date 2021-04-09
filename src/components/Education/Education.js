import React, { Component } from "react";
import EduDisplay from "./EduDisplay";
import uniqid from "uniqid";

class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      schoolData: [],
      addMode: false,
    };
    this.handleAddBtn = this.handleAddBtn.bind(this);
    this.addSchool = this.addSchool.bind(this);
  }

  handleAddBtn = (e) => {
    e.preventDefault();
    let switchAddMode = !this.state.addMode;
    this.setState({
      addMode: switchAddMode,
    });
  };

  addSchool = (e) => {
    e.preventDefault();
    let switchAddMode = !this.state.addMode;
    let newEdu = {
      id: uniqid(),
      school: e.target[0].value,
      from: e.target[1].value,
      to: e.target[2].value,
      description: e.target[3].value,
    };
    this.setState({
      schoolData: this.state.schoolData.concat(newEdu),
      addMode: switchAddMode,
    });
    console.log(this.state.schoolData);
  }

  render() {
    const { schoolData, addMode } = this.state;


    const schoolItems = this.state.schoolData.map(item => <EduDisplay key={item.id} item={item} />)

    console.log(schoolItems)

    if (addMode === true) {
      return (
        <div>
          {schoolItems}
          <form onSubmit={this.addSchool}>
            <label htmlFor="school">School</label>
            <input type="text" id="school" />
            <label htmlFor="from">From:</label>
            <input type="text" id="from" />
            <label htmlFor="to">To:</label>
            <input type="text" id="to" />
            <label htmlFor="description">description:</label>
            <input type="text" id="description" />
            <button type="submit">Save</button>
          </form>
        </div>
      );
    } else {
      return (
        <div>
          {schoolItems}
          <button type="submit" onClick={this.handleAddBtn}>
            Add
          </button>
        </div>
      );
    }
  }
}

export default Education;

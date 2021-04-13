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

  handleRemove = (id) => {
    let prevState = this.state.schoolData;
    let newState = prevState.filter(item => item.id !== id);
    this.setState({ schoolData: newState });
  };

  addSchool = (e) => {
    e.preventDefault();
    let switchAddMode = !this.state.addMode;
    if (e.target[0].value && e.target[0].value && e.target[0].value === "") {
      this.setState({
        addMode: switchAddMode,
      });
    } else {
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
    }
  };

  render() {
    const { schoolData, addMode } = this.state;

    const schoolItems = schoolData.map((item) => (
      <EduDisplay key={item.id} item={item} handleRemove={this.handleRemove} />
    ));

    console.log(schoolItems);

    if (addMode === true) {
      return (
        <div>
          {schoolItems}
          <form onSubmit={this.addSchool}>
            <label htmlFor="school">School</label>
            <input type="text" id="school" required />
            <label htmlFor="from">From:</label>
            <input type="text" id="from" required />
            <label htmlFor="to">To:</label>
            <input type="text" id="to" required />
            <label htmlFor="description">description:</label>
            <input type="text" id="description" />
            <button type="submit">Save</button>
          </form>
          <button type="submit" onClick={this.handleAddBtn}>
            Cancel
          </button>
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

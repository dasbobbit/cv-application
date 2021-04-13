import React, { Component } from "react";
import WorkDisplay from "./WorkDisplay";
import uniqid from "uniqid";

class Workhistory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      workData: [],
      addMode: false,
    };
    this.handleAddBtn = this.handleAddBtn.bind(this);
    this.addWork = this.addWork.bind(this);
  }

  handleAddBtn = (e) => {
    e.preventDefault();
    let switchAddMode = !this.state.addMode;
    this.setState({
      addMode: switchAddMode,
    });
  };

  handleRemove = (id) => {
    let prevState = this.state.workData;
    let newState = prevState.filter(item => item.id !== id);
    this.setState({ workData: newState });
  };

  addWork = (e) => {
    e.preventDefault();
    let switchAddMode = !this.state.addMode;
    if (e.target[0].value && e.target[0].value && e.target[0].value === "") {
      this.setState({
        addMode: switchAddMode,
      });
    } else {
      let newWork = {
        id: uniqid(),
        company: e.target[0].value,
        position: e.target[1].value,
        from: e.target[2].value,
        to: e.target[3].value,
        maintasks: e.target[4].value,
      };
      this.setState({
        workData: this.state.workData.concat(newWork),
        addMode: switchAddMode,
      });
    }
  };

  render() {
    const { workData, addMode } = this.state;

    const workItems = workData.map((item) => (
      <WorkDisplay key={item.id} item={item} handleRemove={this.handleRemove} />
    ));

    console.log(workItems);

    if (addMode === true) {
      return (
        <div>
          {workItems}
          <form onSubmit={this.addWork}>
            <label htmlFor="company">Company</label>
            <input type="text" id="company" required />
            <label htmlFor="position">Company</label>
            <input type="text" id="position" required />
            <label htmlFor="from">From:</label>
            <input type="text" id="from" required />
            <label htmlFor="to">To:</label>
            <input type="text" id="to" required />
            <label htmlFor="maintasks">Main Tasks:</label>
            <input type="text" id="maintasks" />
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
          {workItems}
          <button type="submit" onClick={this.handleAddBtn}>
            Add
          </button>
        </div>
      );
    }
  }
}

export default Workhistory;

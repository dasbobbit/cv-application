import React, { useState } from "react";
import WorkDisplay from "./WorkDisplay";
import "../../styles/Workhistory.css";
import uniqid from "uniqid";

const Workhistory = (props) => {
  const [workData, setWorkData] = useState([]);
  const [addMode, setAddMode] = useState(false);

  const handleAddBtn = (e) => {
    e.preventDefault();
    let switchAddMode = !addMode;
    setAddMode(switchAddMode);
  };

  const handleRemove = (id) => {
    let prevworkData = workData;
    let newworkData = prevworkData.filter((item) => item.id !== id);
    setWorkData(newworkData);
  };

  const addWork = (e) => {
    e.preventDefault();
    let switchAddMode = !addMode;
    if (e.target[0].value && e.target[1].value && e.target[2].value === "") {
      setAddMode(switchAddMode);
    } else {
      setWorkData([
        ...workData,
        {
          id: uniqid(),
          company: e.target[0].value,
          position: e.target[3].value,
          from: e.target[1].value,
          to: e.target[2].value,
          maintasks: e.target[4].value,
        },
      ]);
      setAddMode(switchAddMode);
    }
  };

  const workItems = workData.map((item) => (
    <WorkDisplay key={item.id} item={item} handleRemove={handleRemove} />
  ));

  if (addMode === true) {
    return (
      <div>
        {workItems}
        <form onSubmit={addWork} className="work-form">
          <label htmlFor="company">Company</label>
          <input type="text" id="company" className="company-input" required />

          <label htmlFor="from" className="date-label">Dates</label>
          <input type="text" id="from" className="input-to-from work-from" required />

          <input type="text" id="to" className="input-to-from work-to" required />

          <label htmlFor="position" class="position-label">Position</label>
          <input type="text" id="position" className="work-position" required />

          <label htmlFor="maintasks">Main Tasks:</label>
          <textarea type="text" id="maintasks" className="maintasks-input"></textarea>

          <button type="submit" className="work-save">Save</button>
          <button type="submit" className="work-cancel" onClick={handleAddBtn}>
            Cancel
          </button>
        </form>
      </div>
    );
  } else {
    return (
      <div>
        {workItems}
        <button type="submit" onClick={handleAddBtn}>
          Add
        </button>
      </div>
    );
  }
};

export default Workhistory;

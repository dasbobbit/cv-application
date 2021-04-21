import React, { useState } from "react";
import EduDisplay from "./EduDisplay";
import "../../styles/Education.css";
import uniqid from "uniqid";

const Education = (props) => {

  const [schoolData, setSchoolData] = useState([]);
  const [addMode, setAddMode] = useState(false);

  const handleAddBtn = (e) => {
    e.preventDefault();
    let switchAddMode = !addMode;
    setAddMode(switchAddMode);
  };

  const handleRemove = (id) => {
    let prevSchoolData = schoolData;
    let newData = prevSchoolData.filter((item) => item.id !== id);
    setSchoolData(newData);
  };

  const addSchool = (e) => {
    e.preventDefault();
    let switchAddMode = !addMode;
    if (e.target[0].value && e.target[1].value && e.target[2].value === "") {
      setAddMode(switchAddMode)
    } else {
      setSchoolData([
        ...schoolData,
        {
          id: uniqid(),
          school: e.target[0].value,
          from: e.target[1].value,
          to: e.target[2].value,
          description: e.target[3].value
        }
      ])
      setAddMode(switchAddMode);
    }
  };

  const schoolItems = schoolData.map((item) => (
    <EduDisplay key={item.id} item={item} handleRemove={handleRemove} />
  ));

  if (addMode === true) {
    return (
      <div>
        {schoolItems}
        <form onSubmit={addSchool} className="school-form">
          <label htmlFor="school">School Name</label>
          <input type="text" id="school" required />

          <label htmlFor="from" className="date-label">Dates </label>
          <input type="text" id="from" className="input-to-from school-from" required />
          {/* <label htmlFor="to">to</label> */}
          <input type="text" id="to" className="input-to-from school-to" required />

          <label htmlFor="description">Description </label>
          <textarea type="textarea" id="description" className="school-description"></textarea>

          <button type="submit" className="school-save">Save</button>
          <button type="submit" className="school-cancel" onClick={handleAddBtn}>
            Cancel
          </button>
        </form>
      </div>
    );
  } else {
    return (
      <div>
        {schoolItems}
        <button type="submit" onClick={handleAddBtn}>
          Add
        </button>
      </div>
    );
  }
}

export default Education;

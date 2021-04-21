import React, { useState } from "react";
import "../../styles/Generalinfo.css";

const Generalinfo = (props) => {

  const [editMode, setEditMode] = useState(true);
  const [firstname, setFirstname] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditMode(!editMode);
  };
  const firstnameChange = (e) => {
    setFirstname(e.target.value);
  };
  const surnameChange = (e) => {
    setSurname(e.target.value);
  };
  const phoneChange = (e) => {
    setPhone(e.target.value);
  };
  const emailChange = (e) => {
    setEmail(e.target.value);
  };
  const websiteChange = (e) => {
    setWebsite(e.target.value);
  };

  console.log(`here now`);
  console.log(editMode);

  if (editMode === false) {
    return (
      <div className="display-container">
        <h1>
          {firstname} {surname}
        </h1>
        <h4>{phone}</h4>
        <h4>{email}</h4>
        <h4>{website}</h4>
        <button onClick={handleSubmit}>Edit</button>
      </div>
    );
  } else {
    return (
      <div className="edit-container">
        <h1>Personal Information</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstname">First Name</label>
          <input
            onChange={firstnameChange}
            value={firstname}
            type="text"
            id="firstname"
            required
          />
          <label htmlFor="surname">Surname</label>
          <input
            onChange={surnameChange}
            value={surname}
            type="text"
            id="surname"
            required
          />
          <label htmlFor="phone">Phone Number</label>
          <input onChange={phoneChange} value={phone} type="text" id="phone" />
          <label htmlFor="email">Email</label>
          <input onChange={emailChange} value={email} type="text" id="email" />
          <label htmlFor="website">Website</label>
          <input onChange={websiteChange} value={website} type="text" id="website" />
          <button type="submit">Save</button>
        </form>
      </div>
    );
  }
};

export default Generalinfo;

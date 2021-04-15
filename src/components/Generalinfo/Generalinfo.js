import React, { Component } from "react";
import "../../styles/Generalinfo.css";

class Generalinfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      surname: "",
      phone: "",
      email: "",
      editMode: true,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let switchEditMode = !this.state.editMode;
    this.setState({
      editMode: switchEditMode,
    });
  };

  firstnameChange = (e) => {
    this.setState({
      firstname: e.target.value,
    });
  };
  surnameChange = (e) => {
    this.setState({
      surname: e.target.value,
    });
  };
  phoneChange = (e) => {
    this.setState({
      phone: e.target.value,
    });
  };
  emailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  render() {
    const { firstname, surname, phone, email, editMode } = this.state;
    console.log(`here now`);
    console.log(editMode);

    if (editMode === false)
      return (
        <div class="container">
          <h1>
            {firstname} {surname}
          </h1>
          <h4>{phone}</h4>
          <h4>{email}</h4>
          <button onClick={this.handleSubmit}>Edit</button>
        </div>
      );

    return (
      <div class="container">
        <h1>Personal Information</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="firstname">First Name </label>
            <input
              onChange={this.firstnameChange}
              value={firstname}
              type="text"
              id="firstname"
            />
          </div>
          <div>
            <label htmlFor="surname">Surname </label>
            <input
              onChange={this.surnameChange}
              value={surname}
              type="text"
              id="surname"
            />
          </div>
          <div>
            <label htmlFor="phone">Phone Number </label>
            <input
              onChange={this.phoneChange}
              value={phone}
              type="text"
              id="phone"
            />
          </div>
          <div>
            <label htmlFor="email">Email </label>
            <input
              onChange={this.emailChange}
              value={email}
              type="text"
              id="email"
            />
          </div>
          <button type="submit">Save</button>
        </form>
      </div>
    );
  }
}

export default Generalinfo;

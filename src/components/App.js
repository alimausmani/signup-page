import React from "react";
import { useState } from "react";
import "../styles/App.css";

const App = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    gender: "male",
    phonenumber: "",
    password: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleNameInputChange = (event) => {
    setValues({ ...values, name: event.target.value });
  };

  const handleEmailInputChange = (event) => {
    setValues({ ...values, email: event.target.value });
  };

  const handleGenderInputChange = (event) => {
    setValues({ ...values, gender: event.target.value });
  };

  const handlePhoneNumberInputChange = (event) => {
    setValues({ ...values, phonenumber: event.target.value });
  };

  const handlePasswordInputChange = (event) => {
    setValues({ ...values, password: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      values.name &&
      values.email &&
      values.phonenumber &&
      values.password &&
      values.password.length > 5 &&
      values.email.includes("@") &&
      isNaN(values.name)
    ) {
      setValid(true);
    }
    setSubmitted(true);
  };

  return (
    <div id="main">
      <h2>Sign Up Form</h2>
      <div>
        <form id="register-form" onClick={handleSubmit}>
          {submitted && valid ? (
            <h2 className="success-message">
              Hello {values.email.split("@")[0]}
            </h2>
          ) : null}
          <ul className="wrapper">
            <li className="form-row">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                data-testid="name"
                onChange={handleNameInputChange}
                value={values.name}
                placeholder="Name"
                name="Name"
                required
              />
              {submitted && !values.name ? <span>Name Error</span> : null}
              {submitted && values.name && !isNaN(values.name) ? (
                <span>Name is not alphanumeric</span>
              ) : null}
            </li>

            <li className="form-row">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                data-testid="email"
                value={values.email}
                onChange={handleEmailInputChange}
                placeholder="Email"
                name="email"
                required
              />
              {submitted && !values.email ? <span>Email Error</span> : null}
              {submitted && values.email && !values.email.includes("@") ? (
                <span>Email must contain @</span>
              ) : null}
            </li>

            <li className="form-row">
              <label htmlFor="gender">Gender</label>
              <select
                data-testid="gender"
                id="gender"
                value={values.gender}
                onChange={handleGenderInputChange}
              >
                <option selected>Male</option>
                <option value="female">Female</option>
                <option value="others">others</option>
              </select>
            </li>

            <li className="form-row">
              <label htmlFor="phoneno">Phone Number</label>
              <input
                type="number"
                id="phoneno"
                data-testid="phoneNumber"
                value={values.phonenumber}
                onChange={handlePhoneNumberInputChange}
                required
                placeholder="phone"
              />
              {submitted && !values.phonenumber ? (
                <span>Phone Number Error</span>
              ) : null}
            </li>

            <li className="form-row">
              <label htmlFor="pass">Password</label>
              <input
                type="password"
                id="pass"
                data-testid="password"
                required
                className="form-field"
                value={values.password}
                onChange={handlePasswordInputChange}
                placeholder="password"
              />
              {submitted && !values.password ? (
                <span>Password Error</span>
              ) : null}
              {submitted &&
              values.password &&
              document.getElementById("pass").value.length < 6 ? (
                <span>Password must contain atleast 6 letters</span>
              ) : null}
            </li>

            <li className="form-row">
              <button type="submit" data-testid="submit">
                Submit
              </button>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
};

export default App;

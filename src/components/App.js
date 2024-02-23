import React, { useState } from "react";
import "../styles/App.css";

const App = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    gender: "male",
    phonenumber: "",
    password: "",
    termsAndConditions: false
  });
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleNameInputChange = (event) => {
    const newName = event.target.value.replace(/[^A-Za-z ]/g, "");
    setValues({ ...values, name: newName });
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

  const handleTermsInputChange = () => {
    setValues({ ...values, termsAndConditions: !values.termsAndConditions });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      values.name &&
      values.email &&
      values.phonenumber &&
      values.password &&
      values.termsAndConditions &&
      values.password.length > 5 &&
      values.email.includes("@") &&
      isNaN(values.name)
    ) {
      setValid(true);
      setSuccessMessage(`Hello ${values.email.split("@")[0]}. Your signup is successful!`);
      setValues({
        name: "",
        email: "",
        gender: "male",
        phonenumber: "",
        password: "",
        termsAndConditions: false
      });
    }
    setSubmitted(true);
  };

  return (
    <div id="main">
      <img
        src="https://pxbar.com/wp-content/uploads/2023/09/cartoon-profile-pic-for-girl-1024x1024.jpg"
        alt="Header Image"
        style={{ width: "15%", marginBottom: "20px", borderRadius: "50%", height: "3%" }}
      />
      <h2>Sign Up Form</h2>
      <div>
        <form id="register-form" onSubmit={handleSubmit}>
          {submitted && valid && <h2 className="success-message">{successMessage}</h2>}
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
            </li>

            <li className="form-row">
              <label>
                <input
                  type="checkbox"
                  id="termsAndConditions"
                  data-testid="termsAndConditions"
                  checked={values.termsAndConditions}
                  onChange={handleTermsInputChange}
                  required
                />
                Accept Terms and Conditions
              </label>
            </li>

            <li className="form-row">
              <button type="submit" data-testid="submit">
                Sign Up
              </button>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
};

export default App;

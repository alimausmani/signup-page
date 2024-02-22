import React, { useState, useRef } from "react";
import Validation from "./Validation";

const Form = () => {
  const uname = useRef(null);
  const uemail = useRef(null);
  const ugender = useRef(null);
  const uphoneno = useRef(null);
  const upass = useRef(null);

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    gender: "",
    phoneno: "",
    pass: ""
  });

  const storeUserData = () => {
    const data = {
      name: uname.current.value,
      email: uemail.current.value,
      gender: ugender.current.value,
      phoneno: uphoneno.current.value,
      pass: upass.current.value
    };
    setUserData(data);
  };

  const checkValidation = () => {};

  return (
    <div>
      <form onClick={checkValidation}>
        <ul className="wrapper">
          <li className="form-row">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" data-testid="name" ref={uname} />
          </li>

          <li className="form-row">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" data-testid="email" ref={uemail} />
          </li>

          <li className="form-row">
            <label htmlFor="gender">Gender</label>
            <select data-testid="gender" id="gender" ref={ugender}>
              <option selected>Male</option>
              <option>Female</option>
            </select>
          </li>

          <li className="form-row">
            <label htmlFor="phoneno">Phone Number</label>
            <input
              type="number"
              id="phoneno"
              data-testid="phoneNumber"
              ref={uphoneno}
            />
          </li>

          <li className="form-row">
            <label htmlFor="pass">Password</label>
            <input
              type="password"
              id="pass"
              data-testid="password"
              ref={upass}
            />
          </li>

          <li className="form-row">
            <button type="submit" data-testid="submit">
              Submit
            </button>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default Form;

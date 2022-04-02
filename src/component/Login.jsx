import React, { useState } from "react";

const Login = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [pass, setPass] = useState("");
  let [isValidName, setValidName] = useState("");
  let [isvalidEmail, setValidEmail] = useState("");
  let [isvalidPass, setValidpass] = useState("");

  let checkName = (e) => {
    console.log(e.target.value);
    if (e.target.value.length > 3) {
      setName(e.target.value);
      setValidName("");
    } else {
      setName("");
      setValidName("*must be more than 3");
    }
  };
  //-----------------------------------------------------
  let checkEmail = (e) => {
    var mail_format = /\S+@\S+\.\S+/;
    var test = mail_format.test(e.target.value);
    console.log(test);
    if (e.target.value.length == 0 || !test) {
      setEmail("");
      setValidEmail("*must be a valid email");
    } else {
      setName(e.target.value);
      setValidEmail("");
    }
  };
  //-------------------------------------------------------
  let checkPassword = (e) => {
    console.log(e.target.value);
    if (e.target.value.length > 8) {
      setPass(e.target.value);
      setValidpass("");
    } else {
      setPass("");
      setValidpass("*must be more than 8");
    }
  };
  //-------------------------------------------------------

  let onSub = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form action="#" onSubmit={onSub} className="form">
        <p className="title">Sign In</p>
        <div className="input-container">
          <label for="uname">Name: </label>
          <input type={"text"} id="uname" onChange={checkName} required />
          <p className="error">{isValidName}</p>
        </div>
        {/* //------------------- */}
        <div className="input-container">
          <label for="email">Email: </label>
          <input type={"email"} id="email" onChange={checkEmail} required />
          <p className="error">{isvalidEmail}</p>
        </div>
        {/* ------------------------------ */}
        <div className="input-container">
          <label for="password">Password: </label>
          <input
            type={"password"}
            id="password"
            onChange={checkPassword}
            required
          />
          <p className="error">{isvalidPass}</p>
        </div>
        {/* ------------------------------ */}
        <input type={"submit"} value="Submit" />
      </form>
    </>
  );
};

export default Login;

import React, { useState } from "react";

const LoginPass = () => {
  const initialState = {
    account: "",
    password: "",
  };
  const [userLogin, setUserLogin] = useState(initialState);
  const { email, password } = userLogin;
  const [typePass, setTypePass] = useState(false);
  const handleChangeInput = (e) => {
    const { value, name } = e.target;
    setUserLogin({
      ...userLogin,
      [name]: value,
    });
  };

  const handleTypePass = () => {
    setTypePass(!typePass);
  };

  return (
    <form>
      <div className="form-group mb-3">
        <label className="form-label" htmlFor="email">
          {" "}
          Email{" "}
        </label>{" "}
        <input
          className="form-control"
          type="text"
          id="email"
          name="email"
          value={email}
          onChange={handleChangeInput}
        />{" "}
      </div>
      <div className="form-group mb-3 ">
        <label className="form-label" htmlFor="password">
          {" "}
          Password{" "}
        </label>{" "}
        <div className="pass">
          <input
            className="form-control"
            type={typePass ? "text" : "password"}
            id="password"
            name="password"
            value={password}
            onChange={handleChangeInput}
          />{" "}
          <small onClick={handleTypePass}> {typePass ? "Hide" : "Show"} </small>{" "}
        </div>{" "}
      </div>{" "}
      <button
        type="submit"
        className="btn btn-dark w-100"
        disabled={email && password ? false : true}
      >
        Login{" "}
      </button>{" "}
    </form>
  );
};

export default LoginPass;

import React from "react";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  let navigate = useNavigate();

  const formSubmitHandler = (event) => {
    event.preventDefault();
    navigate("/");
  };

  return (
    <>
      <form onSubmit={formSubmitHandler}>
        <div className="email">
          <TextField
            type="text"
            name="email"
            id="Email"
            label="EMAIL"
            sx={{ marginBottom: "0.5em" }}
          />
        </div>
        <div className="password">
          <TextField
            type="password"
            name="password"
            id="Password"
            label="PASSWORD"
            sx={{ marginBottom: "0.5em" }}
          />
        </div>
        <div>
          <Button
            type="submit"
            variant="contained"
            size="large"
            sx={{ backgroundColor: "red" }}
          >
            LOGIN
          </Button>
        </div>
      </form>
    </>
  );
};

export default LoginPage;

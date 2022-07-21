import React from "react";
import { Link } from "@mui/material";

const Navbar = () => {
  return (
    <>
      <div id="header">
        <Link>Home</Link>
        <Link>Series</Link>
        <Link>Movies</Link>
      </div>
    </>
  );
};

export default Navbar;

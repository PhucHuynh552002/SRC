import React from "react";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import AirplayRoundedIcon from '@mui/icons-material/AirplayRounded';
import CookieRoundedIcon from "@mui/icons-material/CookieRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import { Link } from "react-router-dom";

import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Group 12</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/home" style={{ textDecoration: "none" }}>
            <li>
              <GridViewRoundedIcon className="icon" />
              <span>Add</span>
            </li>
          </Link>
          <Link to="/dashboard" style={{ textDecoration: "none" }}>
            <li>
              <GridViewRoundedIcon className="icon" />
              <span>Search</span>
            </li>
          </Link>
          <p className="title">SERVICE</p>
          <Link to="/tool" style={{ textDecoration: "none" }}>
            <li>
              <PeopleAltRoundedIcon className="icon" />
              <span>Database</span>
            </li>
          </Link>
        </ul>
      </div>
      {/* <div className="bottom">color option</div> */}
    </div>
  );
};

export default Sidebar;

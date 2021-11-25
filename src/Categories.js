import React from "react";
import "./Categories.css";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <ul class="navbar-nav">
        <li className="nav-item">
        <span>
          <Link class="nav-link" aria-current="page" to="/">
            Beauty
          </Link>
          </span>
        </li>
        <li  className="nav-item">
        <span className="category">
          <Link className="nav-link" to="/cloth">
            Clothing{" "}
          </Link>
          </span>
        </li>
        <li  className="nav-item">
        <span className="category">
          <Link className="nav-link" to="/kids">
            Kids{" "}
          </Link>
          </span>
        </li>
        <li  className="nav-item">
        <span className="category">
          <Link className="nav-link" to="/Electronics">
            Electronics
          </Link>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Categories;

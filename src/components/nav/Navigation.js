import React from "react";
import { Link, useParams } from "react-router-dom";
import style from "./Navigation.module.css";

const Navigation = (props) => {
  const { id } = useParams();
  const title = props?.title;
  return (
    <nav className={`${style.navigation}`}>
      {id !== "posts" ? (
        <Link to="/posts">
          <h1>{title}</h1>
        </Link>
      ) : (
        <h1>{title}</h1>
      )}
    </nav>
  );
};

export default Navigation;

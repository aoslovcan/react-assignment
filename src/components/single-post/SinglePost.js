import React from "react";
import style from "./SinglePost.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SinglePost = (props) => {
  console.log(`${props?.message} SinglePost`);

  return (
    <>
      <div className={`${style.singlePost}`}>
        <h3 className={`${style.postTitle} col-12`}>{props.postData.title}</h3>
        <div
          className={`${style.singlePostImg} col-12`}
          style={{ backgroundImage: `url(${props?.imgUrl})` }}
        ></div>
        <span className={`${style.singlePostAuthor}`}>
          {localStorage.getItem("authorName")}
        </span>
        <p className={`${style.singlePostBody} col-12`}>
          {props.postData.body}
        </p>
      </div>
    </>
  );
};
export default SinglePost;

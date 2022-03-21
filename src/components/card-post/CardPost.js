import React from "react";
import style from "./CardPost.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getTextExcerpt } from "../../helpers/functions";

const CardPost = (props) => {
  console.log(`${props.message} CardPost`);
  const saveDataToStorage = () => {
    localStorage.setItem("authorName", props?.authorData);
  };
  return (
    <div className="col-3" data-testid="card-post">
      <Link
        data-testid="post-link"
        to={`post/${props.id}`}
        onClick={saveDataToStorage}
        className={` ${style.cardPost}`}
      >
        <div className={`${style.cardPostTitle}`}>
          <h5>{getTextExcerpt(props?.title)}</h5>
        </div>
        <div className={`${style.postAuthorName}`}>
          <FontAwesomeIcon icon="user" /> {props?.authorData}
        </div>
        <div className={`${style.cardPostHeader}`}>
          <img src={`${props.imgUrl}`} alt="img" />
        </div>
        <div className={`${style.cardPostContent}`}>{props?.content}</div>
      </Link>
    </div>
  );
};
export default CardPost;

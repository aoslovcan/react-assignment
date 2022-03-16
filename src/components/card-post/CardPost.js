import React from "react";
import style from "./CardPost.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CardPost = (props) => {
  console.log(`${props.message} CardPost`);
  console.log(props.authorData[0]?.name);
  console.log(props.key);
  return (
    <div className="col-3">
      <Link to={`posts/${props.id}`} className={` ${style.cardPost}`}>
        <div className={`${style.cardPostTitle}`}>
          <h5>{props.title}</h5>
        </div>
        <div className={`${style.postAuthorName}`}>
          <FontAwesomeIcon icon="user" /> {props.authorData[0]?.name}
        </div>
        <div className={`${style.cardPostHeader}`}>
          <img src={`${props.imgUrl}`} alt="img" />
        </div>
        <div className={`${style.cardPostContent}`}>{props.content}</div>
      </Link>
    </div>
  );
};
export default CardPost;

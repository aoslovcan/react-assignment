import React from "react";
import style from "./PostComments.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PostComments = (props) => {
  console.log(`${props?.message} PostComments`);

  return (
    <div class={`${style.postComments}`} data-testid="post-comments">
      <div className={`${style.postCommentsAuthor}`}>
        <FontAwesomeIcon className="user-icon" icon="user" />
        <span
          className={`${style.postCommentsEmail}`}
          data-testid="post-comment-email"
        >
          {props?.email}
        </span>
      </div>
      <div className={`${style.postCommentsName}`}>
        <p data-testid="post-comment-name">{props?.name}</p>
      </div>
      <div className={`${style.postCommentsContent}`}>
        <p data-testid="post-comment-body">{props?.body}</p>
      </div>
    </div>
  );
};

export default PostComments;

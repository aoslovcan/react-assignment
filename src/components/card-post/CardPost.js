import React from "react";
import style from "./CardPost.module.css";

const CardPost = (props) => {
  console.log(`${props.message} CardPost`);
  return (
    <div className={`col-3 ${style.cardPost}`}>
      <div className={`${style.postAuthorName}`}>Name Surname</div>
      <div className={`${style.cardPostTitle}`}>
        <h3>Lorem ipsum</h3>
      </div>
      <div className={`${style.cardPostHeader}`}>
        <img src="https://picsum.photos/200/300" alt="img" />
      </div>
      <div className={`${style.cardPostContent}`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </div>
    </div>
  );
};
export default CardPost;

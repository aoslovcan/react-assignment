import React from "react";

const SinglePost = (props) => {
  if (props.postData) {
    console.log(props.postData);
  }

  return (
    <div className="row">
      <div className="col-12">
        <h3>{props.postData.title}</h3>
        <p>{props.postData.body}</p>
      </div>
    </div>
  );
};

export default SinglePost;

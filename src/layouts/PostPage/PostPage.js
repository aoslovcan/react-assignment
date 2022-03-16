import React, { useState, useEffect } from "react";
import { getPostDetails, getPostComments } from "../../api/allApis";
import SinglePost from "../../components/single-post/SinglePost";
import { useParams } from "react-router-dom";

const PostPage = (props) => {
  const { id } = useParams();
  const [postDetail, setPostDetail] = useState();
  const [postComments, setPostComments] = useState([]);
  console.log(props?.message + "PostPage");
  useEffect(() => {
    getPostDetails(id).then((res) => {
      setPostDetail(res);
    });

    getPostComments(id).then((res) => {
      setPostComments(res);
    });
  }, []);

  return (
    <div className="container">
      {postDetail ? <SinglePost postData={postDetail} /> : <p>Loading...</p>}
    </div>
  );
};

export default PostPage;

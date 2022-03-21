import React, { useState, useEffect } from "react";
import { getPostDetails, getPostComments } from "../../api/allApis";
import SinglePost from "../../components/single-post/SinglePost";
import PostComments from "../../components/post-comments/PostComments";
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
    <>
      <div className="container" data-testid="post-page">
        <div className="row">
          <div className="col-12">
            {postDetail ? (
              <SinglePost
                imgUrl="https://picsum.photos/1300/250"
                message={props?.message}
                postData={postDetail}
              />
            ) : (
              <p>Loading...</p>
            )}
          </div>
          <div className="col-8 offset-2">
            <h5>Comments</h5>
            {postComments
              ? postComments.map((comment, i) => {
                  return (
                    <PostComments
                      key={i}
                      name={comment.name}
                      body={comment.body}
                      email={comment.email}
                      message={props?.message}
                    />
                  );
                })
              : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default PostPage;

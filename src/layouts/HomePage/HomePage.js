import React, { useEffect, useState } from "react";
import CardPost from "../../components/card-post/CardPost";
import { getPosts, getUsers } from "../../api/allApis";

const HomePage = (props) => {
  console.log(`${props.message} HomePage`);
  const [postData, setPostData] = useState([]);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    getPosts().then((res) => {
      setPostData(res);
    });

    getUsers().then((res) => {
      setUserData(res);
    });
  }, []);

  const getPostAuthor = (id) => {
    let user = userData.filter((user) => user.id === id);
    return user;
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-6 row offset-3">
          <input type="text" />
        </div>
        <div className="col-12 row">
          {postData.length
            ? postData.map((post) => {
                let author = getPostAuthor(post.userId);
                return (
                  <CardPost
                    id={post.id}
                    authorData={author}
                    message={props.message}
                    title={post.title}
                    imgUrl={"https://picsum.photos/200/300"}
                    content={post.body}
                  />
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
};

export default HomePage;

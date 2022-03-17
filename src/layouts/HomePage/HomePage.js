import React, { useEffect, useState } from "react";
import CardPost from "../../components/card-post/CardPost";
import { getPosts, getUsers } from "../../api/allApis";
import Search from "../../common/search/Search";

const HomePage = (props) => {
  console.log(`${props?.message} HomePage`);
  const [posts, setPosts] = useState([]);
  const [userData, setUserData] = useState([]);
  const [postsData, setPostsData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    getPosts().then((res) => {
      setPosts(res);
    });

    getUsers().then((res) => {
      setUserData(res);
    });
  }, []);

  const getPostAuthor = (id) => {
    let user = userData.filter((user) => user.id === id);
    return user[0]?.name;
  };

  const getAllDataPosts = (posts) => {
    let allPostsData = posts.map((post) => {
      let userID = getPostAuthor(post.userId);
      return {
        id: post.id,
        title: post.title,
        body: post.body,
        author: userID,
      };
    });
    setPostsData(allPostsData);
  };

  useEffect(() => {
    if (posts.length) {
      getAllDataPosts(posts);
    }
  }, [posts, userData]);

  useEffect(() => {
    if (filteredData?.length) {
      setPostsData(filteredData);
    } else {
      getAllDataPosts(posts);
    }
  }, [filteredData, posts, userData]);

  return (
    <div className="container">
      <div className="row">
        <Search
          placeholder="Find post by user data"
          message={props?.message}
          dataToSearch={postsData}
          setFiltered={setFilteredData}
        />
        <div className="col-12 row">
          {postsData?.length
            ? postsData.map((post, i) => {
                return (
                  <CardPost
                    key={i}
                    id={post.id}
                    authorData={post.author}
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

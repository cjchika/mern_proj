import React from "react";
import Post from "./Post/Post";
import { useSelector } from "react-redux";

import useStyles from "./styles";

const Posts = () => {
  const classes = useStyles();
  const loadedPosts = useSelector((state) => state.posts);

  console.log(loadedPosts);

  return (
    <>
      <h1>POSTS</h1>
      <Post />
      <Post />
    </>
  );
};

export default Posts;

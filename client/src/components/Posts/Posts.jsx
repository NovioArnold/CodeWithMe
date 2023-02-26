import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post/Post";
import useStyles from "./styles";

const Posts = ({ posts }) => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();
  return (
    <>
    <h2>Posts</h2>
    <Post />
    <Post />
    </>
  );
};

export default Posts;   
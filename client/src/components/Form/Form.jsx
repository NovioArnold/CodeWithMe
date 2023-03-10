// import statements
import React, { useState, useEffect } from "react";
import { Paper, TextField, Button, Typography } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";

import useStyles from "./styles";
import { createPost, updatePost } from "../../actions/posts";


// Form component
const Form = ({ currentId, setCurrentId }) => {
  useEffect (() => {
    if (post) setPostData(post)
  }, [post]);


  const dispatch = useDispatch();
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const post  = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);
  const classes = useStyles();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(updatePost(currentId, postData));
    } else {


    dispatch(createPost(postData));
    }
  };
  const clear = () => {
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };
  const updatePost = (currentId, postData) => { 
    dispatch(updatePost(currentId, postData));
  };

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">Creating a memory</Typography>
         <TextField 
        name="creator" 
        variant="outlined" 
        label="Creator" 
        fullWidth
        value={postData.creator}
        onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
         />
         <TextField 
        name="title" 
        variant="outlined" 
        label="Title" 
        fullWidth
        value={postData.title}
        onChange={(e) => setPostData({ ...postData, title: e.target.value })}
         />
         <TextField 
        name="message" 
        variant="outlined" 
        label="Message" 
        fullWidth
        value={postData.message}
        onChange={(e) => setPostData({ ...postData, message: e.target.value })}
         />
         <TextField 
        name="tags" 
        variant="outlined" 
        label="tags" 
        fullWidth
        value={postData.tags}
        onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
         />
          <div className={classes.fileInput}>
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
            /> 
          </div>
          <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
          <Button  variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear Form</Button>
      </form>
    </Paper>
  );
};

export default Form;

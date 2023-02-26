import React, { useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux"; // useDispatch is a hook that returns the dispatch method from the Redux store, which is used to dispatch actions and trigger state changes to the store.

import { getPosts } from "./actions/posts"; // getPosts is an action creator that returns an action object with a type and payload. The type is a string that describes the action that occurred. The payload is the data that is being sent to the reducer. The reducer will use the type to determine what to do with the payload. The reducer will then return a new state object that will be used to update the store.
import memories from "./images/memories.png";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import useStyles from "./styles";

const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts()); // dispatch is a method that takes an action as an argument and sends it to the reducer.  
    }, [dispatch]);

    return (
        <>
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">
                    Memories
                </Typography>
                <img className={classes.image} src={memories} alt="memories" height="60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid> 
                    </Grid> 
                 </Container>           
            </Grow>
        </Container>
        </>
        );
    };

export default App;
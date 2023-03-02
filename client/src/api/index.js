//api methods for interacting with the server.
import axios from 'axios';

const url = 'http://localhost:5000/posts'; // in production replace with .env variable called SERVER_IP and SERVER_PORT like this `http://${SERVER_PORT}:${SERVER_PORT}/posts`

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
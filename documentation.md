# Developers documentation

## Used frameworks

### Frontend 

- React
- Material UI 

### Backend
- Express
- MongoDB
- S4 for storage of images

## Deployment

Kubernetes cluster for scaling and versioning running on linode or AWS Cloud
AWS S4 cluster for File storage

## Setup
next few steps needed to do before setup
change SERVER_IP and SERVER_PORT in client .env to correct ip and port
change CLIENT_IP and CLIENT_PORT in server .env to correct ip and port 
insert correct keys and configuration into .env files

## Concept Definition

- User can create an account
- User can create a profile
- User can edit their profile
- User can set their profile and parts of their profile to public, friends only, friends of friends only or private (standard profile)
- User can Friend other users 
- User can accept other users friend requests, after which the can see each other in their friends list and see their profile (setting above apply)
- User can send a private message to other users, friends can always sent a private message but other users ability to send a private message depending on the settings that user allows private messages from non friends.
- User can login with username and password
- User can logout
- User can create a new memory post
- User can upload a picture to that post
- User can Edit the post
- User can delete the post
- User can vote other Users Memories.
- User can comment on other users Memories.

## Packages used

### Server


```json
{
  "dependencies": {
    "body-parser": "^1.20.2",
    "cors": "^2.8.5",
    "dotenv": "^16.0.3",
    "express": "^4.18.2",
    "mongoose": "^6.10.0",
    "nodemon": "^2.0.20"
  },
  "name": "server",
  "version": "1.0.0",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  },
  "keywords": [],
  "author": "Arnold Hilberink",
  "license": "MIT",
  "description": "Share your favorite places with others!"
}

```

### Client

```json
{
  "name": "mern-stack-client",
  "version": "0.1.0",
  "private": true,
  "proxy": "http://localhost:5000",
  "dependencies": {
    "@material-ui/core": "^4.12.4",
    "@material-ui/icons": "^4.9.1",
    "@testing-library/jest-dom": "^4.2.4",
    "@testing-library/react": "^9.3.2",
    "@testing-library/user-event": "^7.1.2",
    "axios": "^0.19.2",
    "moment": "^2.27.0",
    "react": "^16.12.0",
    "react-dom": "^16.12.0",
    "react-file-base64": "^1.0.3",
    "react-redux": "^7.1.3",
    "react-scripts": "3.4.1",
    "redux": "^4.0.5",
    "redux-thunk": "^2.3.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": "react-app"
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "devDependencies": {
    "eslint-config-airbnb": "^18.2.0",
    "eslint-plugin-import": "^2.22.0",
    "eslint-plugin-jsx-a11y": "^6.3.1",
    "eslint-plugin-react": "^7.20.6",
    "eslint-plugin-react-hooks": "^4.1.0"
  }
}

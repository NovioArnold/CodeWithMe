import mongoose from "mongoose";

const createUserSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    profilePicture: String,
    posts: [String],
    bio: String,
    friends: [String],  
    createdAt: {
        type: date,
        default: new Date(),
        
    },
    lastUpdatedAt: {
        type: date,
        default: new Date(),
    },
});


const createUser = mongoose.model('User', createUserSchema);
export default createUser
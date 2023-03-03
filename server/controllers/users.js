// import statements
import mongoose from "mongoose";
import createUser from "../models/userProfile";

// get user
export const getUser = async (req, res, next) => {
    try{
        const user = await createUser.find();
        res.status(200).json(user);
    } catch(error){
        res.status(404).json({message: error.message});
    }
}

// create user
export const createUser = async (req, res, next) => {
    const user = req.body;
    const createdUser = new createUser(user);

    try{
        await user.save(createdUser);
        res.status(200).json(createdUser);
    } catch(error){
        res.status(409).json({message: error.message})
    }

}

// update user
export const updateUser = async (req, res, next) => {
    
}

// delete user
export const deleteUser = async (req, res, next) => {

}

import User from '../Models/users';
import {Request,Response} from 'express';

export const addUser = async (req:Request,res:Response) =>{
    const username = req.body.username;
    try {
        const user = await User.findOne({where:{username:username}});
        if(user){
            res.status(501).json({message:'User Exist'});
        }
        else{
            await User.create({username:username});
            
            res.status(200).json({message:"user created"});
        }

    } catch (error) {
        res.status(500).json({message:"internal server error"});
    }
}

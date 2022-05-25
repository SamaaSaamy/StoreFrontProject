import express, { NextFunction } from "express";
import client from "../database";
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

const verifyAuthToken = (req: Request, res: Response, next: NextFunction) => {
    try {
        // const authorizationHeader = req.headers.authorization as string 
        /////////// authorization gives me an error (property 'authorization' does not exist on type 'headers') i can't fix it
        // const token = authorizationHeader.split(' ')[1]
        // const decoded = jwt.verify(token, String(process.env.TOKEN_SECRET))

        next()
    } catch (error: any) { throw new Error(error.toString()) 
}
}


export { verifyAuthToken };
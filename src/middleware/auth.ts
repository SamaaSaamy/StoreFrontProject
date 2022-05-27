import express, { NextFunction } from "express";
import client from "../database";
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

const verifyAuthToken = (req: express.Request, res: express.Response, next: NextFunction) => {
    try {
        var authorizationHeader = req.headers.authorization as string
        const token = authorizationHeader.split(' ')[1]
        const decoded = jwt.verify(token, String(process.env.TOKEN_SECRET))

        next()
    } catch (error: any) {
        throw new Error(error.toString())
    }
}


export { verifyAuthToken };
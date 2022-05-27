import express, { NextFunction } from "express";
import client from "../database";
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

const verifyAuthToken = (req: express.Request, res: express.Response, next: NextFunction) => {
    try {
        var authorizationHeader = req.headers.authorization as string
        const decoded = jwt.verify(authorizationHeader, String('any_string'))
        if(! decoded) throw new Error ("invalid")

        next()
    } catch (error: any) {
        throw new Error(error.toString())
    }
}


export { verifyAuthToken };
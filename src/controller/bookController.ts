import express from "express";
import { Books, book } from '../models/book'
import client from "../database";
import { checkForExistence } from '../middleware/utils'

const book = new Books()

const index = async (request: express.Request, response: express.Response): Promise<void> => {
    try {
        const result = await book.index();

        // response.status(200);
        response.send(result)

    } catch (error: any) { throw new Error(error.toString()) }
};

const show = async (request: express.Request, response: express.Response): Promise<void> => {
    try {
        // await checkForExistence(Number(request.params.id), 'book')
        const result = await book.show(request.params.id);

        response.status(200);
        response.send(result)

    } catch (error: any) { throw new Error(error.toString()) }
};

const create = async (request: express.Request, response: express.Response): Promise<void> => {
    try {
        const result = await book.create(request.body.book);

        response.status(200);
        response.send(result)

    } catch (error: any) { throw new Error(error.toString()) }
};


export { index, show, create };
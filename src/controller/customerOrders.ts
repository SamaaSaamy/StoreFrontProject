import express from "express";
import { checkForExistence } from "../middleware/utils";

const currentOrder = async (request: express.Request, response: express.Response): Promise<void> => {
    try {
        let customer = await checkForExistence(Number(request.params.id), 'customer')
        // const result = await book.index();

        response.status(200);
        // response.send(result)

    } catch (error: any) { throw new Error(error.toString()) }
};

export { currentOrder };
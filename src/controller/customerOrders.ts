import express from "express";
import { checkForExistence } from "../middleware/utils";
import client from "../database";
import { customerOrder, customerOrders } from '../models/customerOrder'
const customerOrder = new customerOrders()

// const createOrder = async (request: express.Request, response: express.Response): Promise<void> => {
//     try {
//         console.log("ddddd", request.body.order)
//         let result = []
//         if (!request.body.order) throw new Error(`you didn't add an order`)
//         if (request.body.order.length == 0) throw new Error(`you must select something`)

//         for await (let item of request.body.order) {
//             console.log("item", item)
//             // let customer = await checkForExistence(Number(request.params.id), 'customer')
//             let ite = await customerOrder.create(item);
//             console.log("ite", ite)
//             await result.push(ite)
//         }

//         response.status(200);
//         response.send(result)

//     } catch (error: any) { throw new Error(error.toString()) }
// };

const currentOrder = async (request: express.Request, response: express.Response): Promise<void> => {
    try {
        const result = await customerOrder.currentOrder(request.params.id);

        response.status(200);
        response.send(result)

    } catch (error: any) { throw new Error(error.toString()) }
};

export { currentOrder };
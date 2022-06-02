import express from "express";
import { orders, theorders } from '../models/order'
import client from "../database";
import { checkForExistence } from '../middleware/utils'
import { customerOrder, customerOrders } from '../models/customerOrder'
const customerOrder = new customerOrders()
const order = new theorders()

const index = async (request: express.Request, response: express.Response): Promise<void> => {
    try {
        const result = await order.index();

        // response.status(200);
        response.send(result)

    } catch (error: any) { throw new Error(error.toString()) }
};

const show = async (request: express.Request, response: express.Response): Promise<void> => {
    try {
        // await checkForExistence(Number(request.params.id), 'book')
        const result = await order.show(request.params.id);

        response.status(200);
        response.send(result)

    } catch (error: any) { throw new Error(error.toString()) }
};

// const create = async (request: express.Request, response: express.Response): Promise<void> => {
//     try {
//         const Order = await order.create(request.params.id);

//         for ( let i=0; i<request.body.order.length;i++){
//             const customerOrderr = await customerOrder.create(request.body.order[i], Number(Order.id));
//         }

//         response.status(200);
//         response.send(Order)

//     } catch (error: any) { throw new Error(error.toString()) }
// };

const currentOrder = async (request: express.Request, response: express.Response): Promise<void> => {
    try {
        const result = await order.currentOrder(request.params.id);

        response.status(200);
        response.send(result)

    } catch (error: any) { throw new Error(error.toString()) }
};


export { index, show, currentOrder };
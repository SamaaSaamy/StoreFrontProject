import express from "express";
import { customer, customers } from '../models/customer'
import jwt from 'jsonwebtoken'

const customer = new customers()

const index = async (request: express.Request, response: express.Response): Promise<void> => {
    try {
        const result = await customer.index();

        response.status(200);
        response.send(result)

    } catch (error: any) { throw new Error(error.toString()) }
};

const show = async (request: express.Request, response: express.Response): Promise<void> => {
    try {
        const result = await customer.show(request.params.id);

        response.status(200);
        response.send(result)

    } catch (error: any) { throw new Error(error.toString()) }
};

const create = async (request: express.Request, response: express.Response): Promise<void> => {
    try {
        let data ={}
        const result = await customer.create(request.body.customer);
        let payload = {'name':result.firstname, id:result.id}

        let token = await jwt.sign(payload,'any_string')
        data = {result, token}
        response.status(200);
        response.send(data)

    } catch (error: any) { throw new Error(error.toString()) }
};


export { index, show, create };
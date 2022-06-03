import { customerOrder, customerOrders } from '../customerOrder';
import supertest from 'supertest';
import app from '../../server';

const request = supertest(app);
let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjpudWxsLCJpZCI6MjEsImlhdCI6MTY1NDE5MTQxNX0.2eQnrKma67DgHuIK9-xkTR6ZHAjsP50-NGzBr33OUkI"
const store = new customerOrders()

describe("customerOrder Model", () => {
    it('should have an index method', () => {
        expect(store.index).toBeDefined();
    });

    it('should have a show method', () => {
        expect(store.show).toBeDefined();
    });

    // it('should have a create method', () => {
    //     expect(store.create).toBeDefined();
    // });

    it('should have a delete method', () => {
        expect(store.delete).toBeDefined();
    });

    // this is the only end point i have in customer orders 
    it('get current order', async (done) => {
        const response = await request.get('/customerOrders/currentOrder/10').set({ "authorization": ` ${token}` })
        expect(response.status).toBe(200)
        await done()
    })
});
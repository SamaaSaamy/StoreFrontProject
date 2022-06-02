import { theorders, orders } from '../order';
import supertest from 'supertest';
import app from '../../server';

const request = supertest(app);
let token = " eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjpudWxsLCJpZCI6MzYsImlhdCI6MTY1NDIwNjczNn0.5ejuWEaQQxW-rbFiR1o1AoaDaD4BelYHm0Vp39bQmaI"
const store = new theorders()

describe("orders Model", () => {
    it('should have an index method', () => {
        expect(store.index).toBeDefined();
    });

    it('should have a show method', () => {
        expect(store.show).toBeDefined();
    });

    it('should have a create method', () => {
        expect(store.create).toBeDefined();
    });

    it('should have a delete method', () => {
        expect(store.delete).toBeDefined();
    });

    it('get current order', async (done) => {
        const response = await request.get('/order/currentOrder/36').set({"authorization":` ${token}`})
        expect(response.status).toBe(200)
        await done()
      })
});
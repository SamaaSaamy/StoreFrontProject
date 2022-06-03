import { customer, customers } from '../customer';
import supertest from 'supertest';
import app from '../../server';

const request = supertest(app);
const store = new customers()
let customerr = {"firstname": "samaa", "lastname": "samy", "password": "12345678"}
let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjpudWxsLCJpZCI6MjEsImlhdCI6MTY1NDE5MTQxNX0.2eQnrKma67DgHuIK9-xkTR6ZHAjsP50-NGzBr33OUkI"
describe("customers Model", () => {
  beforeAll(function() {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
});

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

    it('create method should add a customer', async () => {
        const createdCustomer = await store.create(customerr);
        console.log(createdCustomer)
        expect(createdCustomer.firstname).toBe('samaa');

      });

      it('Index method should return All customers', async () => {
        const customerss = await store.index();
        let length = customerss.length
        expect(customerss[0].firstname).toBe('samaa');
      });

      it('Show method should return a specific user', async () => {
        const createdCustomer = await store.create(customerr);
        const result = await store.show(String(createdCustomer.id));
        expect(result.id).toBe(createdCustomer.id);
        expect(result.firstname).toBe("samaa");
        expect(result.lastname).toBe("samy");
      });

      it('create customer', async (done) => {
        const response = await (await request.post('/customer/create').send({"customer": {"firstName": "customer first name", "lastName": "customer last name", "password": "12345678"}}))
        expect(response.status).toBe(200)
        await done()
      })

      it('show one customers', async (done) => {
        const response = await request.get('/customer/show/1').set({"authorization":`${token}`})
        expect(response.status).toBe(200)
        await done()
      })

      it('show all customer', async (done) => {
        const response = await request.get('/customer/index').set({"authorization":`${token}`})
        expect(response.status).toBe(200)
        await done()
      })

});
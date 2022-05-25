import client from "../database";
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken'

dotenv.config()

export type customer = {
    id?: number;
    firstName: string;
    lastName: string;
    password: Text;
}

export class customers {

    async index(): Promise<customer[]> {
        try {
            const conn = await client.connect()
            const sql = 'SELECT * FROM customer'
            const result = await conn.query(sql)
            conn.release()
            return result.rows

        }
        catch (err) {
            throw new Error(`error in ${err}`)
        }
    }

    async show(id: string): Promise<customer> {
        try {
            const sql = 'SELECT * FROM customer WHERE id=($1)'
            const conn = await client.connect()
            const result = await conn.query(sql, [id])
            conn.release()
            return result.rows[0]
        } catch (err) {
            throw new Error(`Could not find customer ${id}. Error: ${err}`)
        }
    }

    async create(b: customer): Promise<customer> {
        try {
            const sql = 'INSERT INTO customer (firstName, lastName, password) VALUES($1, $2, $3) RETURNING *'
            const hash = bcrypt.hashSync(
                String(b.password),
                parseInt(String(process.env.SALT_ROUNDS))
             );
            const conn = await client.connect()

            const result = await conn
                .query(sql, [b.firstName, b.lastName, hash])

            const customer = result.rows[0]

            conn.release()

            return customer
        } catch (err) {
            throw new Error(`Could not add new customer. Error: ${err}`)
        }
    }

    async delete(id: string): Promise<customer> {
        try {
            const sql = 'DELETE FROM customer WHERE id=($1)'
            const conn = await client.connect()
            const result = await conn.query(sql, [id])
            const customer = result.rows[0]
            conn.release()

            return customer
        } catch (err) {
            throw new Error(`Could not delete customer ${id}. Error: ${err}`)
        }
    }

}
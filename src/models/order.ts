import client from "../database";

export type orders = {
    id?: number;
    orderstatus: string | "active";
    customer_id: number,
}

export class theorders {

    async index(): Promise<orders[]> {
        try {
            const conn = await client.connect()
            const sql = 'SELECT * FROM orders'
            const result = await conn.query(sql)
            conn.release()
            return result.rows

        }
        catch (err) {
            throw new Error(`error in ${err}`)
        }
    }

    async show(id: string): Promise<orders> {
        try {
            const sql = 'SELECT * FROM orders WHERE id=($1)'
            const conn = await client.connect()
            const result = await conn.query(sql, [id])
            conn.release()
            return result.rows[0]
        } catch (err) {
            throw new Error(`Could not find order ${id}. Error: ${err}`)
        }
    }

    async create(id: string): Promise<orders> {
        try {
            const sql = 'INSERT INTO orders (customer_id, orderstatus) VALUES( $1, $2) RETURNING *'
            const conn = await client.connect()
            const result = await conn
                .query(sql, [id, "active"])

            const order = result.rows[0]

            conn.release()

            return order
        } catch (err) {
            throw new Error(`Could not add new order. Error: ${err}`)
        }
    }

    async delete(id: string): Promise<orders> {
        try {
            const sql = 'DELETE FROM orders WHERE id=($1)'
            const conn = await client.connect()
            const result = await conn.query(sql, [id])
            const order = result.rows[0]
            conn.release()

            return order
        } catch (err) {
            throw new Error(`Could not delete order ${id}. Error: ${err}`)
        }
    }

    async currentOrder(id: string): Promise<orders> {
        try {
            const sql = 'SELECT * FROM orders WHERE customer_id=($1) AND orderstatus=($2) LIMIT 1'
            const conn = await client.connect()
            const result = await conn.query(sql, [id, "active"])

            const order = result.rows[0]

            conn.release()

            return order
        } catch (err) {
            throw new Error(`Could not add new order. Error: ${err}`)
        }
    }

}
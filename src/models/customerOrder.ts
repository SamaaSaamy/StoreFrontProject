import client from "../database";

export type customerOrder = {
    id?: number;
    status: string;
    quantity: number;
    customer_id: number,
    book_id: number
}

export class customerOrders {

    async index(): Promise<customerOrder[]> {
        try {
            const conn = await client.connect()
            const sql = 'SELECT * FROM customerOrder'
            const result = await conn.query(sql)
            conn.release()
            return result.rows

        }
        catch (err) {
            throw new Error(`error in ${err}`)
        }
    }

    async show(id: string): Promise<customerOrder> {
        try {
            const sql = 'SELECT * FROM customerOrder WHERE id=($1)'
            const conn = await client.connect()
            const result = await conn.query(sql, [id])
            conn.release()
            return result.rows[0]
        } catch (err) {
            throw new Error(`Could not find customerOrder ${id}. Error: ${err}`)
        }
    }

    async create(b: customerOrder): Promise<customerOrder> {
        try {
            const sql = 'INSERT INTO customerOrder (status, quantity, customer_id, book_id) VALUES($1, $2, $3, $4) RETURNING *'
            const conn = await client.connect()

            const result = await conn
                .query(sql, [b.status, b.quantity, b.customer_id, b.book_id])

            const customerOrder = result.rows[0]

            conn.release()

            return customerOrder
        } catch (err) {
            throw new Error(`Could not add new customerOrder. Error: ${err}`)
        }
    }

    async delete(id: string): Promise<customerOrder> {
        try {
            const sql = 'DELETE FROM customerOrder WHERE id=($1)'
            const conn = await client.connect()
            const result = await conn.query(sql, [id])
            const customerOrder = result.rows[0]
            conn.release()

            return customerOrder
        } catch (err) {
            throw new Error(`Could not delete customerOrder ${id}. Error: ${err}`)
        }
    }

}
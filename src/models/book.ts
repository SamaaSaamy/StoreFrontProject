import client from "../database";

export type book = {
    id?: number;
    name: string;
    author_name: string;
    pagesNumber: number;
}

export class Books {

    async index(): Promise<book[]> {
        try {
            const conn = await client.connect()
            const sql = 'SELECT * FROM book'
            const result = await conn.query(sql)
            conn.release()
            return result.rows

        }
        catch (err) {
            throw new Error(`error in ${err}`)
        }
    }

    async show(id: string): Promise<book> {
        try {
            const sql = 'SELECT * FROM book WHERE id=($1)'
            const conn = await client.connect()
            const result = await conn.query(sql, [id])
            conn.release()
            return result.rows[0]
        } catch (err) {
            throw new Error(`Could not find book ${id}. Error: ${err}`)
        }
    }

    async create(b: book): Promise<book> {
        try {
            const sql = 'INSERT INTO book (name, author_name, pagesNumber) VALUES($1, $2, $3) RETURNING *'
            const conn = await client.connect()

            const result = await conn
                .query(sql, [b.name, b.author_name, b.pagesNumber])

            const book = result.rows[0]

            conn.release()

            return book
        } catch (err) {
            throw new Error(`Could not add new book. Error: ${err}`)
        }
    }

    async delete(id: string): Promise<book> {
        try {
            const sql = 'DELETE FROM book WHERE id=($1)'
            const conn = await client.connect()
            const result = await conn.query(sql, [id])
            const book = result.rows[0]
            conn.release()

            return book
        } catch (err) {
            throw new Error(`Could not delete book ${id}. Error: ${err}`)
        }
    }

}
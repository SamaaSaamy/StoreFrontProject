import express from "express";
import client from "../database";

const checkForExistence = async (
    id: number, dbTable: string
): Promise<void> => {
    try {

        if (!id || !dbTable) throw new Error("can't find table entry with a null value")
        const sql = `SELECT * FROM ${dbTable} WHERE id=${id}`
        const conn = await client.connect()
        const result = await conn.query(sql)

        if (!result) throw new Error(`can't find ${dbTable} entry with a given value`)
        return result
    } catch (error: any) {
        throw new Error(error.toString());
    }
};


export { checkForExistence };
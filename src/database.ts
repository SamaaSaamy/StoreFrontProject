// import dotenv from 'dotenv'
// import { Pool } from 'pg'
// dotenv.config()

// const {
//     POSTGRES_HOST,
//     POSTGRES_DB,
//     POSTGRES_TEST_DB,
//     POSTGRES_USER,
//     POSTGRES_PASSWORD,
//     ENV
// } = process.env

// let client: any

// if(ENV === 'test') {
//     client = new Pool({
//       host: POSTGRES_HOST,
//       database: POSTGRES_DB,
//       user: POSTGRES_USER,
//       password: POSTGRES_PASSWORD,
//     })
//   }
  
//   if(ENV === 'dev') {
//     client = new Pool({
//       host: POSTGRES_HOST,
//       database: POSTGRES_TEST_DB,
//       user: POSTGRES_USER,
//       password: POSTGRES_PASSWORD,
//     })
//   }

// export default client


import dbConf from './config/database.config'
import { Pool } from 'pg'

const db: Pool = new Pool({
  host: dbConf.host,
  port: dbConf.port,
  user: dbConf.user,
  password: dbConf.password,
  database: dbConf.database,
})

export default db
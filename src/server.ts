import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import routes from "./routes/index";
import appConf from './config/database.config'
const app: express.Application = express()
const address: string = "localhost:3000"

const corsOptions = {
    origin:"http://bookStore.com"
}

app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use("/", routes);

app.get('/', function (req: Request, res: Response) {
    res.send('Hello World!')
})

app.listen(3000, async function () {
    console.log(`starting app on: ${address}`)
    // await client.connect();
    // console.log(`db connected`)
})

export default app;

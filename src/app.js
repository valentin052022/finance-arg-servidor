import express from 'express'
import {config} from 'dotenv'
import bodyParser from 'body-parser'
import { routes } from './routes/api-all-routes.js';
import cors from 'cors';

config();
const port = process.env.PORT ||8080;
const app = express()
app.use(cors({ origin: '*' }));

app.use(bodyParser.json());

app.get("/",(req,res)=>{
    try {
        res.status(200).send("Servidor funcionando correctamente")
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})


app.use("/api", routes);
app.listen(port, ()=> console.log( `Server on: http://localhost:${port}`))


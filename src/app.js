import express from 'express'
import {config} from 'dotenv'
import bodyParser from 'body-parser'
import { routes } from './routes/api-all-routes.js';

config();
const port = process.env.PORT ||8080;
const app = express()

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


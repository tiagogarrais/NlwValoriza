import "reflect-metadata"
import express, { response } from "express"
import { router } from "./routes"
import "./database"

const app = express()
app.use(express.json())
app.use(router)
app.listen(2000, ()=>console.log("Servidor rodando"))
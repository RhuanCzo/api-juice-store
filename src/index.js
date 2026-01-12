import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { MongoClient } from "mongodb"

const app = express()

app
.use(cors())
.use(express.json())
const  mongoClient = new MongoClient(process.env.Mongo_URI)

app.listen(process.env.PORT, () => {
    console.log("server running on port" + process.env.PORT)
})
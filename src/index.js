import express from "express"
import cors from "cors"
import authRoutes from "./routes/auth.routes.js"
import carRoutes from "./routes/cart.routes.js"

const app = express()

app
.use(cors())
.use(express.json())
.use(authRoutes)
.use(carRoutes)






app.listen(4000, () => console.log("server running in port 4000"))
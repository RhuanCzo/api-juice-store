import { Router } from "express"
import { addProductsCart, findProducts } from "../controllers/cartControllers.js"
import { authRoutesValidation } from "../midlewares/auth.midleware.js"
import { addProductsCartValidation } from "../midlewares/cart.midleware.js"



const router = Router()

router.use(authRoutesValidation)
router.post("/addCart", addProductsCartValidation, addProductsCart)
router.get("/addCart", findProducts)

export default router
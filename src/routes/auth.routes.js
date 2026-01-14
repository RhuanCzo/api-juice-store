import { Router } from "express"
import { signUp, signIn } from "../controllers/auth.controllers.js"
import signInBodyValidation from "../midlewares/auth.midleware.js"


const router = Router()

router.post("/sign-up", signUp)
router.post("/sign-in", signInBodyValidation, signIn)

export default router
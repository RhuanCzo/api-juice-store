import { Router } from "express"
import { signUp, signIn } from "../controllers/auth.controllers.js"
import {signInBodyValidation, signUpBodyValidation} from "../midlewares/auth.midleware.js"


const router = Router()

router.post("/sign-up", signUpBodyValidation, signUp)
router.post("/sign-in", signInBodyValidation, signIn)

export default router
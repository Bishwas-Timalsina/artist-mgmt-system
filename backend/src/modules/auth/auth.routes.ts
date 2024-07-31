import { Router } from "express";
import login from "./controllers/login";
import register from "./controllers/register";

const authRouter = Router()

authRouter.post('/login',login)
authRouter.post('/register',register)

export default authRouter;

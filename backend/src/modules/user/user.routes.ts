import express from "express";
import login from "./controller/login";
import getUser from "./controller/getUser";
import addUser from "./controller/addUser";
import register from "./controller/register";
import updateUser from "./controller/updateUser";
import deleteUser from "./controller/deleteUser";
import getAllUser from "./controller/getAllUser";
import userAuth from "../../middlewares/userAuth";
import getLoggedInUser from "./controller/getLoggedInUser";

const userRouter = express();

userRouter.post("/login", login);
userRouter.post("/register", register);

userRouter.use(userAuth);
userRouter.get("/", getLoggedInUser);

userRouter.get("/all", getAllUser);
userRouter.get("/:id", getUser);
userRouter.post("/add", addUser);
userRouter.patch("/update/:id", updateUser);
userRouter.delete("/delete/:id", deleteUser);

export default userRouter;

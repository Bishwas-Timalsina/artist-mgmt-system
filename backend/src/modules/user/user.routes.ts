import express from "express";
import getUser from "./controller/getUser";
import getAllUser from "./controller/getAllUser";
import addUser from "./controller/addUser";
import updateUser from "./controller/updateUser";
import deleteUser from "./controller/deleteUser";
import login from "./controller/login";
const userRouter = express();

userRouter.post("/login", login);
userRouter.get("/all", getAllUser);
userRouter.get("/:id", getUser);
userRouter.post("/add", addUser);
userRouter.patch("/update/:id", updateUser);
userRouter.delete("/delete/:id", deleteUser);

export default userRouter;

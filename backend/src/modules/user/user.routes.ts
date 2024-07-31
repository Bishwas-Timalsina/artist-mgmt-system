import express from "express";
import addUser from "./controller/addUser";
import deleteUser from "./controller/deleteUser";
import getAllUser from "./controller/getAllUser";
import getLoggedInUser from "./controller/getLoggedInUser";
import getUser from "./controller/getUser";
import updateUser from "./controller/updateUser";

const userRouter = express();

userRouter.get("/", getLoggedInUser);

userRouter.get("/all", getAllUser);
userRouter.get("/:id", getUser);
userRouter.post("/add", addUser);
userRouter.patch("/update/:id", updateUser);
userRouter.delete("/delete/:id", deleteUser);

export default userRouter;

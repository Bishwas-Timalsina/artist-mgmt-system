import express from "express";
import getUser from "./controller/getUser";
import getAllUser from "./controller/getAllUser";
import addUser from "./controller/addUser";
import updateUser from "./controller/updateUser";
import deleteUser from "./controller/deleteUser";
const user = express();

user.get("/", getAllUser);
user.get("/:id", getUser);
user.post("/add", addUser);
user.patch("/update/:id", updateUser);
user.delete("/delete/:id", deleteUser);

export default user;

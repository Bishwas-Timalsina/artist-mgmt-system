import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import userAuth from "./middlewares/userAuth";
import songRouter from "./modules/song/song.routes";
import userRouter from "./modules/user/user.routes";
import authRouter from "./modules/auth/auth.routes";
import artistRouter from "./modules/artist/artist.routes";

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json({ limit: "2000000000b" }));

app.use("/api/v1/auth", authRouter);
app.use(userAuth);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/artist", artistRouter);
app.use("/api/v1/song", songRouter);

app.listen(8000, () => {
  console.log("Server started");
});

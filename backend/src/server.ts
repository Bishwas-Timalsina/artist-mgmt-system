import express from "express";
import cors from "cors";
import userRouter from "./modules/user/user.routes";
import artistRouter from "./modules/artist/artist.routes";
import musicRouter from "./modules/song/song.routes";
const app = express();
app.use(cors());
app.use(express.json({ limit: "2000000000b" }));

app.use("/api/v1/user", userRouter);
app.use("/api/v1/artist", artistRouter);
app.use("api/v1/music", musicRouter);

app.listen(8000, () => {
  console.log("Server started");
});

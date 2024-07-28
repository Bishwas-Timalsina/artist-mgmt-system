import express from "express";
import addSong from "./controller/addSong";
import getSong from "./controller/getSong";
import getSingleSong from "./controller/getSingleSong";
import updateSong from "./controller/updateSong";
import deleteSong from "./controller/deleteSong";
const musicRouter = express();

musicRouter.get("/", getSong);
musicRouter.get("/:id", getSingleSong);
musicRouter.post("/add", addSong);
musicRouter.patch("/update", updateSong);
musicRouter.delete("/delete", deleteSong);

export default musicRouter;

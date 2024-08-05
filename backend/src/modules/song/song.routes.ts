import express from "express";
import addSong from "./controller/addSong";
import getSong from "./controller/getSong";
import getSingleSong from "./controller/getSingleSong";
import updateSong from "./controller/updateSong";
import deleteSong from "./controller/deleteSong";
const songRouter = express();

songRouter.get("/", getSong);
songRouter.get("/:id", getSingleSong);
songRouter.post("/add/:artist_id", addSong);
songRouter.patch("/update/:artist_id/:song_title", updateSong);
songRouter.delete("/delete", deleteSong);

export default songRouter;

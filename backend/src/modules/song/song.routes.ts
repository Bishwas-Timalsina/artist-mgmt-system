import express from "express";
import addSong from "./controller/addSong";
import getSong from "./controller/getSong";
import getSingleSong from "./controller/getSingleSong";
import updateSong from "./controller/updateSong";
import deleteSong from "./controller/deleteSong";
const song = express();

song.get("/", getSong);
song.get("/:id", getSingleSong);
song.post("/add", addSong);
song.patch("/update", updateSong);
song.delete("/delete", deleteSong);

export default song;

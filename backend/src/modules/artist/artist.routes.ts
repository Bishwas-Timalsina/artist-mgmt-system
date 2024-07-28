import express from "express";
import getAllArtist from "./controller/getAllArtist";
import getSingleArtist from "./controller/getSingleArtist";
import addArtist from "./controller/addArtist";
import updateArtist from "./controller/updateArtist";
import deleteArtist from "./controller/deleteArtist";
const artist = express();

artist.get("/", getAllArtist);
artist.get("/:id", getSingleArtist);
artist.post("/add", addArtist);
artist.patch("/update/:id", updateArtist);
artist.delete("/delete/:id", deleteArtist);

export default artist;

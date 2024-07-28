import express from "express";
import getAllArtist from "./controller/getAllArtist";
import getSingleArtist from "./controller/getSingleArtist";
import addArtist from "./controller/addArtist";
import updateArtist from "./controller/updateArtist";
import deleteArtist from "./controller/deleteArtist";
const artistRouter = express();

artistRouter.get("/", getAllArtist);
artistRouter.get("/:id", getSingleArtist);
artistRouter.post("/add", addArtist);
artistRouter.patch("/update/:id", updateArtist);
artistRouter.delete("/delete/:id", deleteArtist);

export default artistRouter;

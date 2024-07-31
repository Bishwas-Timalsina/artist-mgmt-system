import { pool } from "../../../database/db";

const addArtist = async (req: any, res: any) => {
  const {
    name,
    dob,
    gender,
    address,
    first_release_year,
    no_of_album_released,
  } = req.body;
  try {
    if (
      !name ||
      !dob ||
      !gender ||
      !address ||
      !first_release_year ||
      !no_of_album_released
    ) {
      throw new Error("Please enter all the fields");
    }
    const insertQuery =
      'INSERT INTO "artist" (name, dob, gender, address, first_release_year, no_of_album_released) VALUES($1,$2,$3,$4,$5,$6) RETURNING *';
    const newArtist = await pool.query(insertQuery, [
      name,
      dob,
      gender,
      address,
      first_release_year,
      no_of_album_released,
    ]);
    if (newArtist?.rows?.length > 0) {
      res.status(200).json({
        status: "Artist Added successfully",
        data: newArtist?.rows,
      });
    } else {
      throw new Error("Error adding the artist");
    }
  } catch (e: any) {
    res.status(400).json({
      status: "400",
      message: e.message,
    });
  }
  res.status(200).json({
    status: "success",
    message: "This is add artist api",
  });
};
export default addArtist;

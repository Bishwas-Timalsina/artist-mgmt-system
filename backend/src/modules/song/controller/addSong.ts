import { pool } from "../../../database/db";

const addSong = async (req: any, res: any) => {
  const { artist_id } = req?.params;
  const { title, album_name, genre } = req?.body;

  try {
    if (!title || !album_name || !genre) {
      throw new Error("Please include all the fields");
    }
    const insertQuery =
      'INSERT INTO "music"(artist_id,title,album_name,genre) VALUES ($1,$2,$3,$4) RETURNING *';
    const newSong = await pool.query(insertQuery, [
      artist_id,
      title,
      album_name,
      genre,
    ]);
    if (newSong?.rowCount === 0) {
      return res?.status(400).json({
        status: "Error",
        data: "Error adding the song",
      });
    }
    res.status(200).json({
      status: "success",
      message: "This is add Song api",
    });
  } catch (e: any) {
    return res?.status(400).json({
      status: "Error",
      mesasge: e.message,
    });
  }
};
export default addSong;

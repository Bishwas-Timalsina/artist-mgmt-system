import { pool } from "../../../database/db";

const updateSong = async (req: any, res: any) => {
  const { artist_id, song_title } = req?.params;
  const { title, album_name, genre } = req?.body;

  try {
    if (!title || !album_name || !genre) {
      throw new Error("Please enter all the fields");
    }
    const updateQuery =
      'UPDATE "music" SET title=$1,album_name=$2,genre=$3 WHERE artist_id=$4 AND title=$5 RETURNING *';
    const result = await pool.query(updateQuery, [
      title,
      album_name,
      genre,
      artist_id,
      song_title,
    ]);

    if (result?.rowCount === 0) {
      return res.status(400).json({
        status: "Error",
        message: "Error updating the song",
      });
    }

    res.status(200).json({
      status: "Success",
      message: "Song updated successfully",
    });
  } catch (e: any) {
    res?.status(400).json({
      status: "Error",
      message: e.message,
    });
  }
};
export default updateSong;

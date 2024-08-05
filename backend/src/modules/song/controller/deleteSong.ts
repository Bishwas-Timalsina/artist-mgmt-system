import { pool } from "../../../database/db";

const deleteSong = async (req: any, res: any) => {
  console.log(req?.params);
  const { artist_id, song_title } = req?.params;
  const artistID = parseInt(artist_id);

  try {
    const deleteQuery =
      'DELETE FROM "music" WHERE artist_id=$1 AND title=$2 RETURNING *';
    const result = await pool.query(deleteQuery, [artistID, song_title]);
    if (result?.rowCount === 0) {
      return res?.status(400).json({
        status: "Error",
        message: "Error deleting the song",
      });
    }

    res.status(200).json({
      status: "Success",
      message: "This is the delete song API",
    });
  } catch (e: any) {
    return res?.status(400).json({
      status: "Error",
      message: e.message,
    });
  }
};
export default deleteSong;

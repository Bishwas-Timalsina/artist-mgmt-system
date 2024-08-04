import { pool } from "../../../database/db";

const getSong = async (req: any, res: any) => {
  const artistId = req?.headers?.artistid;
  try {
    const allSong = await pool.query(
      'SELECT * FROM "music" WHERE artist_id=$1',
      [artistId]
    );
    if (allSong?.rows?.length > 0) {
      res.status(200).json({
        status: "Success",
        message: "All music is fetched",
        data: allSong?.rows,
      });
    } else {
      throw new Error("Could not get the data");
    }
  } catch (e: any) {
    res.status(400).json({
      status: "Error",
      message: e.message,
    });
  }
};
export default getSong;

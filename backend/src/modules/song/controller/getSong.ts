import { pool } from "../../../database/db";

const getSong = async (req: any, res: any) => {
  try {
    const allSong = await pool.query('SELECT * FROM "music"');
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

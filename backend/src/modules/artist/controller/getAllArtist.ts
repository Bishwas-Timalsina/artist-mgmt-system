import { pool } from "../../../database/db";

const getAllArtist = async (req: any, res: any) => {
  try {
    const allArtist = await pool.query(
      'SELECT * FROM "artist" ORDER BY id ASC'
    );
    if (allArtist.rows) {
      res.status(200).json({
        status: "success",
        message: "This is get all artist api",
        data: allArtist.rows,
      });
    } else {
      throw new Error("Could not get any data");
    }
  } catch (e: any) {
    res.status(400).json({
      status: "Error",
      message: e.message,
    });
  }
};
export default getAllArtist;

import { pool } from "../../../database/db";

const getSingleSong = async (req: any, res: any) => {
  const { id } = req.params;

  try {
    const singleMusic = await pool.query('SELECT * FROM "music" WHERE id=$1', [
      id,
    ]);
    if (singleMusic?.rows?.length > 0) {
      res.status(200).json({
        status: "Success",
        message: "Music successfully fetched",
        data: singleMusic?.rows,
      });
    } else {
      throw new Error("Error fetching the data");
    }
  } catch (e: any) {
    res.status(400).json({
      status: "Error",
      message: e.message,
    });
  }
};
export default getSingleSong;

import { pool } from "../../../database/db";

const getSingleArtist = async (req: any, res: any) => {
  const { id } = req.params;

  try {
    const singleArtist = await pool.query("SELECT * FROM artist where id=$1", [
      id,
    ]);
    if (singleArtist?.rows?.length > 0) {
      res.status(200).json({
        status: "Success",
        message: "Successfully fetched the data",
        data: singleArtist?.rows,
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
export default getSingleArtist;

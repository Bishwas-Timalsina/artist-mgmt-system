import { pool } from "../../../database/db";

const getAllUser = async (req: any, res: any) => {
  try {
    const allUser = await pool.query('SELECT * FROM "user" ORDER BY id ASC');
    if (allUser?.rows?.length > 0) {
      res.status(200).json({
        status: "Success",
        message: "THis is the data",
        data: allUser?.rows,
      });
    } else {
      throw new Error("Could not get the data");
    }
  } catch (e: any) {
    res.status(400).json({
      status: "Error",
      message: "Sorry could not get the data",
    });
  }
};
export default getAllUser;

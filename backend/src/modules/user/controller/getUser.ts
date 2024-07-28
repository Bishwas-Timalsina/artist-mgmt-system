import { pool } from "../../../database/db";

const getUser = async (req: any, res: any) => {
  const { id } = req.params;
  console.log(id);

  try {
    const singleUser = await pool.query('SELECT * FROM "user" WHERE id=$1', [
      id,
    ]);
    console.log(singleUser.rows);
    if (singleUser?.rows?.length > 0) {
      res.status(200).json({
        status: "Success",
        message: "Successfully fetched the data",
        data: singleUser?.rows,
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
  res.status(200).json({
    status: "Success",
    message: "This is get single User api",
  });
};
export default getUser;

import { pool } from "../../../database/db";

const updateUser = async (req: any, res: any) => {
  const { id } = req?.params;
  const { firstName, lastName, email, phone, dob, gender, address } = req?.body;
  if (
    !firstName ||
    !lastName ||
    !email ||
    !phone ||
    !dob ||
    !gender ||
    !address
  ) {
    return res.status(400).json({
      status: "Error",
      message: "Please include all the fields",
    });
  }
  try {
    console.log(req?.body);
    const updateQuery =
      'UPDATE "user" SET first_name=$1,last_name=$2,email=$3,dob=$4,phone=$5,gender=$6,address=$7 RETURNING *';
    const result = await pool.query(updateQuery, [
      firstName,
      lastName,
      email,
      dob,
      phone,
      gender,
      address,
    ]);
    if (result?.rowCount === 0) {
      return res.status(400).json({
        status: "Error",
        message: "Error updating the users",
      });
    }
    res.status(200).json({
      status: "Success",
      message: "User updated successfully",
    });
  } catch (e: any) {
    return res.status(400).json({
      status: "Error",
      message: e.message,
    });
  }
};
export default updateUser;

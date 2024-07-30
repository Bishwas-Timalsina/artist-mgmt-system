import { pool } from "../../../database/db";
import bcrypt from "bcrypt";

const addUser = async (req: any, res: any) => {
  const { firstName, lastName, email, password, dob, phone, address, gender } =
    req.body;
  const hashedPassword = await bcrypt.hash(password, 12);

  try {
    const insertQuery =
      'INSERT INTO "user" (first_name,last_name,email,password,dob,gender,phone,address) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *';
    const newUser = await pool.query(insertQuery, [
      firstName,
      lastName,
      email,
      hashedPassword,
      dob,
      gender,
      phone,
      address,
    ]);

    if (newUser?.rows?.length > 0) {
      res.status(200).json({
        message: "User successfully added",
        data: newUser,
      });
    } else {
      throw new Error("Failed to add new user");
    }
  } catch (e: any) {
    res.status(400).json({
      status: "Error",
      message: e.message,
    });
  }
};
export default addUser;

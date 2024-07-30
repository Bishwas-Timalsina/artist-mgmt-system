import { pool } from "../../../database/db";
import bcrypt from "bcrypt";

const register = async (req: any, res: any) => {
  const { firstName, lastName, email, password, dob, phone, address, gender } =
    req.body;
  const hashedPassword = await bcrypt.hash(password, 12);
  try {
    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !dob ||
      !phone ||
      !address ||
      !gender
    ) {
      throw new Error("Please include all the fields");
    }
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
        message: "Registered Successfully",
        data: newUser,
      });
    } else {
      throw new Error("Failed to add Register");
    }
  } catch (e: any) {
    res.status(400).json({
      status: "Error",
      message: e.message,
    });
  }
};
export default register;

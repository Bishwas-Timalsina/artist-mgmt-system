import { pool } from "../../../database/db";
import bcrypt from "bcrypt";
const login = async (req: any, res: any) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      throw new Error("Please enter all the fields");
    }
    const userExistQuery = 'SELECT * FROM "user" WHERE email=$1';
    const userExist = await pool.query(userExistQuery, [email]);
    if (userExist?.rows?.length === 0) {
      throw new Error("User does not exist");
    }

    const user = userExist.rows[0];
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error("Incorrect Password");
    }
    res.status(200).json({
      status: "Success",
      message: "Login successful",
      data: user,
    });
  } catch (e: any) {
    res.status(400).json({
      status: "Error",
      message: e.message,
    });
  }
};
export default login;

import { pool } from "../../../database/db";

const deleteUser = async (req: any, res: any) => {
  const userId = parseInt(req?.params?.id);
  const currentUserId = parseInt(req?.user?.id);

  if (currentUserId === userId) {
    return res.status(405).json({
      status: "Error",
      message: "Cannot delete yourself",
    });
  }
  if (isNaN(userId)) {
    return res.status(400).json({
      status: "error",
      message: "Invalid user id",
    });
  }
  try {
    const deleteUserQuery = 'DELETE FROM "user" WHERE id = $1 RETURNING *';
    const result = await pool.query(deleteUserQuery, [userId]);
    if (result?.rowCount === 0) {
      return res.status(400).json({
        status: "Error",
        message: "User not found",
      });
    }

    res.status(200).json({
      status: "Success",
      message: "This is delete User api",
    });
  } catch (e: any) {
    res.status(400).json({
      status: "Error",
      message: e.message,
    });
  }
};
export default deleteUser;

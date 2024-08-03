import { pool } from "../../../database/db";

const deleteArtist = async (req: any, res: any) => {
  const artsitId = parseInt(req?.params.id);
  console.log(artsitId);

  if (isNaN(artsitId)) {
    return res.status(400).json({
      status: "Error",
      message: "Invalid Artist ID",
    });
  }
  try {
    const deleteQuery = 'DELETE FROM "artist" WHERE id =$1 RETURNING *';
    const result = await pool.query(deleteQuery, [artsitId]);
    if (result?.rowCount === 0) {
      return res.status(400).json({
        status: "Error",
        message: "Artist not found",
      });
    }
    res.status(200).json({
      status: "success",
      message: "Artist Deleted successfully",
    });
  } catch (e: any) {
    return res.status(400).json({
      status: "Error",
      message: e.message,
    });
  }
};
export default deleteArtist;

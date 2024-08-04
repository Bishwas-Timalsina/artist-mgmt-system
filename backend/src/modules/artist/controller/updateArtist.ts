import { pool } from "../../../database/db";

const updateArtist = async (req: any, res: any) => {
  const { id } = req?.params;
  const {
    name,
    dob,
    address,
    gender,
    first_released_year,
    no_of_album_released,
  } = req?.body;

  if (
    !name ||
    !dob ||
    !address ||
    !gender ||
    !first_released_year ||
    !no_of_album_released
  ) {
    return res.status(400).json({
      status: "Error",
      message: "Please include all the fields",
    });
  }
  try {
    const updateQuery =
      'UPDATE "artist" SET name=$1,dob=$2,address=$3,gender=$4,first_released_year=$5,no_of_album_released=$6 RETURNING *';
    const result = await pool.query(updateQuery, [
      name,
      dob,
      address,
      gender,
      first_released_year,
      no_of_album_released,
    ]);

    if (result?.rowCount === 0) {
      return res?.status(400).json({
        status: "Error",
        message: "Error updating the artsit",
      });
    }
    res.status(200).json({
      status: "Success",
      message: "Artist updated successfully",
    });
  } catch (e: any) {
    return res?.status(400).json({
      status: "Error",
      message: e.message,
    });
  }
};
export default updateArtist;

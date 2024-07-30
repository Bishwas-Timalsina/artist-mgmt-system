import jwt from "jsonwebtoken";
const userLoginManager = ({ id, email, first_name, last_name }: any) => {
  const payload = {
    id,
    email,
    first_name,
    last_name,
  };
  const JWT_SALT = process.env.JWT_SALT!;
  const accessToken = jwt.sign(payload, JWT_SALT);
  return accessToken;
};
export default userLoginManager;

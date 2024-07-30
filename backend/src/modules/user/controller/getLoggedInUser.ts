const getLoggedInUser = async (req: any, res: any) => {
  res.status(200).json({
    status: "Success",
    message: "User info",
    data: req?.user,
  });
};
export default getLoggedInUser;

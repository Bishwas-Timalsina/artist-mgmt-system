const getUser = async (req: any, res: any) => {
  const { id } = req.params;
  console.log(id);
  res.status(200).json({
    status: "Success",
    message: "This is get single User api",
  });
};
export default getUser;

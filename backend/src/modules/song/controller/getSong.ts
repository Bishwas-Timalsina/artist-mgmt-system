const getSong = (req: any, res: any) => {
  res.status(200).json({
    status: "Success",
    message: "This is get all song api",
  });
};
export default getSong;

const getSingleSong = (req: any, res: any) => {
  res.status(200).json({
    status: "Success",
    message: "This is Single song api",
  });
};
export default getSingleSong;

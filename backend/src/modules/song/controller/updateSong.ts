const updateSong = (req: any, res: any) => {
  res.status(200).json({
    status: "Success",
    message: "This is the update song API",
  });
};
export default updateSong;

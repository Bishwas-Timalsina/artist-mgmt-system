const getAllArtist = (req:any, res:any)=>{
    res.status(200).json({
        status:'success',
        message:'This is get all artist api'
    })
}
export default getAllArtist
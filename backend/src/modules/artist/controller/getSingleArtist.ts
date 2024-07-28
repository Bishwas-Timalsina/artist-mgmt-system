const getSingleArtist = (req:any, res:any)=>{
    res.status(200).json({
        status:'success',
        message:'This is get single artist api'
    })
}
export default getSingleArtist
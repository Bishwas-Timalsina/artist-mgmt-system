const deleteArtist = (req:any, res:any)=>{
    res.status(200).json({
        status:'success',
        message:'This is delete artist api'
    })
}
export default deleteArtist
const addArtist = (req:any, res:any)=>{
    res.status(200).json({
        status:'success',
        message:'This is add artist api'
    })
}
export default addArtist
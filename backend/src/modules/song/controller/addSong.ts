const addSong = (req:any,res:any)=>{
    res.status(200).json({
        status:'success',
        message:'This is add Song api'
    })
}
export default addSong
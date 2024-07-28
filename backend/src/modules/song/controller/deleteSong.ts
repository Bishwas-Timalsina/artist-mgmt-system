const deleteSong = (req:any, res:any) =>{
    res.status(200).json({
        status:'Success',
        message:'This is the delete song API'
    })
}
export default deleteSong
const getAllUser = (req:any,res:any)=>{
    res.status(200).json({
        status:'Success',
        message:'This is get all User api'
    })
}
export default getAllUser
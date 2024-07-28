const deleteUser = (req:any,res:any)=>{
    res.status(200).json({
        status:'Success',
        message:'This is delete User api'
    })
}
export default deleteUser
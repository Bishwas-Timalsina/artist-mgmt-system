const addUser = (req:any,res:any)=>{
    res.status(200).json({
        status:'Success',
        message:'This is add User api'
    })
}
export default addUser
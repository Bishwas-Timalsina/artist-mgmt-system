const getUser = (req:any,res:any)=>{
    res.status(200).json({
        status:'Success',
        message:'This is get single User api'
    })
}
export default getUser
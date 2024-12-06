const { createUserType, findAllUserTypes } = require("../services/UserTypeService")

exports.view = async(req, res) =>{
    try {
        const userType = await findAllUserTypes()
        res.render('userType', {userType})        
    } catch (error) {
        
    }
}
exports.create = async(req, res) =>{
    try {
        const data = req.body
        await createUserType(data)
        res.redirect('/user_type')
        
    } catch (error) {
        console.log("error:::", error)
    }
}
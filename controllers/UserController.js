const { createUser, findAllUsers } = require("../services/UserService")
const { findAllUserTypes } = require("../services/UserTypeService")

exports.view = async(req, res) =>{
    try {
        const users = await findAllUsers()
        const userType = await findAllUserTypes()
        console.log(userType)
        res.render('home', {users, userType})        
    } catch (error) {
        
    }
}


exports.create = async(req, res) =>{
    try {
        const data = req.body
        await createUser({...data, user_type: Number(data.user_type)})
        res.redirect('/')
        
    } catch (error) {
        console.log("error:::", error)
    }
}
let express = require("express")
let routerUsers = express.Router()
let users = require("../data/users")

routerUsers.get("/", (req,res) => {
    let email = req.query.email
    if(email != undefined){
         let usersWithEmail = users.filter( user => user.email == email )
         res.send(usersWithEmail)
         return
    }
    res.send(users)
})

routerUsers.get("/:id", (req,res) => {
    let id = req.params.id
    let user = users.find( (u) => u.id == id )
    if(user == undefined){
        res.send("Error")
        return
    }        
    res.send(user)
})

module.exports = routerUsers
let express = require("express")
let app = express()

let tasks = [
    {id:1, text:"hacer la compra"},
    {id:2, text:"pagar la luz"},
    {id:3, text:"revisar las facturas"},
]

let users = [
    {id:1, email:"user1", password:"user1"},
    {id:2, email:"user2", password:"user2"},
]

app.get("/tasks", (req,res) => {
    res.send(tasks)
})

app.get("/tasks/:id", (req,res) => {
    let id = req.params.id
    let task = tasks.find( (t) => t.id == id )
    if(task == undefined){
        res.send("Error")
        return
    }        
    res.send(task)
})

app.get("/users", (req,res) => {
    res.send(users)
})

app.get("/users/:id", (req,res) => {
    let id = req.params.id
    let user = users.find( (u) => u.id == id )
    if(user == undefined){
        res.send("Error")
        return
    }        
    res.send(user)
})

app.listen(8081, () => {
    console.log("Servidor activo")
})
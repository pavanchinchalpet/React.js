const express = require("express");
const app= express();
const port=5000;

app.use(express.json ());

let users=[
    {id:1, name:"pavan"},
    {id:2, name:"kumar"}
];


app.get("/users", (req, res)=> {
    res.json(users);
});





app.listen(port, ()=> {
    console.log('server running on port $ {port}');
});
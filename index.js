const db = require("./db");
const cors = require("cors");
const express = require("express");
const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

// app.use("/auth",authRoute);


// const verifyToken = ((req,res,next) => {
//     const bearerHeader = req.headers["authorization"];
//     if(typeof bearerHeader !== "undefined"){
//         const bearer = bearerHeader.split(" ");
//         const bearerToken = bearer[1];

//         req.token = bearerToken;
//         next()
//     }else {
//         res.sendStatus(403);
//     }
// })




app.listen(PORT,()=> {
    console.log(`listening to port ${PORT}`);
});

module.exports = app;
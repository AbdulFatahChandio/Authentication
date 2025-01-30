const cookieParser = require('cookie-parser');

const express = require('express');
const app = express();
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

const port= 3003;

app.use(cookieParser());
app.get("/", function(req, res){
    let token = jwt.sign({email: "abdulfatah@gmail.com"}, "secret");
    res.cookie("token", token);
    res.send("Done!");
});

app.get("/about", function(req, res){
    res.send("this is read page")
});

app.get("/read", function(req, res){
    let data = jwt.verify(req.cookies.token, "secret");
    console.log(data);
});

//-------------------------------------------------------- Bcrypt -----------------------------------------------------\\

// app.get("/", function(req,res){
//     bcrypt.genSalt(10, function(err,salt){
//         bcrypt.hash("chandio",salt, function(err,hash){
//             console.log("This is My Password string:"+" "+hash);
//         });
//     });
// });

// app.get("/read", function(req,res){
//     res.send("hello this my Read About")
// });


//---------------------------------------------------------------------------------------------------------------------\\

//--------------------------------------------------- Cookie -----------------------------------------------------------\\

//app.use(cookieParser());

// app.get("/", function(req,res){
//     res.cookie("name","fatah");
//     res.send("done!");
// });

// app.get("/read",function(req,res){
//     console.log(req.cookies);
//     res.send("Read about !")
// });

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
    console.log("Server is Running.............................")
});



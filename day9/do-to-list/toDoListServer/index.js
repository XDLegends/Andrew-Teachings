const express = require("express");
const app = express();
const fs = require("fs");
const path = require('path');

app.use("/static", express.static("public")); //detect css in public folder
app.use(express.urlencoded({ extended: true }));

//GET method 
app.get('/',(req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/',(req, res) => {
    console.log(req.body);

    const toDoFilename = "toDo.txt";
    
    let toDoContent = "";
    if(fs.existsSync(toDoFilename)) {
        toDoContent = fs.readFileSync(toDoFilename);
    }

    toDoContent += req.body.content + '\n';

    fs.writeFileSync(toDoFilename, toDoContent);
    
    res.redirect('/');
});


app.listen(3000, () => console.log("Server is Up and running"));


const express = require('express');
let app = express();
app.use(express.static(__dirname));
app.get("/", (req, res)=>{res.sendFile('./flap.html', { root: __dirname });});
app.listen(3000);
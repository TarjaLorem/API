const express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path'),
    server = express();
server.use(bodyParser.urlencoded({ extended: true}));
server.use(bodyParser.json());
server.use(express.static(path.join(__dirname, "public")));

server.get("/", (req, res) => {
    res.render('index.ejs');
});

server.listen(3000, () => console.log('Server on'));
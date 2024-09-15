// node-mysql-app/app.js

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world");
});

// Server will listen to port 8080
app.listen(8080, 
    () => console.log(`Server is listening on port ${8080}`)
);

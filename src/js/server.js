const express = require("express");
const path = require("path");

const svr = express();

const pathParentFolder = path.resolve(__dirname, "../..")
console.log(__dirname);
console.log(pathParentFolder);

// middleware to server static files.
svr.use("/static", express.static(path.join(pathParentFolder, "public")));
// This wildcard will match all and any urls request from clients.
// "all" is just a name assigned to it.
svr.get("/{*all}", (req, res) => {
    res.sendFile(path.join(pathParentFolder, "templates", "index.html"));
})



svr.listen(process.env.PORT || 5500 , () => {
    console.log("Server running...");
});

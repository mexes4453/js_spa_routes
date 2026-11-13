const express = require("express");
const path = require("path");

const svr = express();

const pathProjDir = path.resolve(__dirname, "../..")
console.log(__dirname);
console.log(pathProjDir);

// middleware to server static files.
svr.use("/static", express.static(path.join(pathProjDir, "public")));

// This wildcard will match all and any urls request from clients.
// "all" is just a name assigned to it.
svr.get("/{*all}", (req, res) => {
    res.sendFile(path.join(pathProjDir, "templates", "index.html"));
})



const portNbr = 5500;
svr.listen(process.env.PORT || portNbr , () => {
    console.log("Server running...", portNbr );
});

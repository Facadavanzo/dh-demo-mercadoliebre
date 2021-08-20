const path = require("path");

const express = require("express");
const app = express();

app.listen(process.env.PORT || 3000, () => {
    console.log("Servidor corriendo en el puerto 3000");
});

const publicPath = path.join(__dirname, "public");
const staticMiddleware = express.static(publicPath);
app.use(staticMiddleware);

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "views/home.html"));
});

app.get("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname, "views/register.html"));
});

app.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, "views/login.html"));
});
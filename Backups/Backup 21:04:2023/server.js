const express = require("express");
const app = express();

app.use(express.static("public"));

const PORT = 3050;
const IPV4 = "192.168.0.10";

app.listen(PORT, IPV4, () => {
    console.log("Server running successfully.");
});

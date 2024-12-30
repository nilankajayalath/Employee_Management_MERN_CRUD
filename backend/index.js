const express = require("express");
const dbConnection = require("./config/db");
const router = require("./routes/employess");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors({origin:true, credentials:true}));

dbConnection();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));

app.get("/",(req,res) => res.send("Hello World"));
app.use("/api/employees", router);

const PORT = 3000;
app.listen(PORT,() => console.log(`server runing on PORT ${PORT}`));


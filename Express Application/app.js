const express = require("express");
const mongoose = require("mongoose");
const cors= require("cors")
const router= require("./Routes/router");

const app = express();

const host = "localhost";
const port = 2022;

app.use(cors());
app.use('/', router);

mongoose.connect('mongodb+srv://admin:admin@cluster0.2mhxh.mongodb.net/Project2_API?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    })
.then(
    res => {
            app.listen(port, host, () => {
                console.log(`Server is running on ${host}: ${port}`);
    })
    }
).catch(error => console.log(error))

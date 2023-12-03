const express = require('express');
const app = express();
const cors = require('cors');
const userRoutes = require("./routes/userRoutes");
const {conn, sql} = require("./connectDB")

app.use(cors());

// handling incoming data
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// route
app.use('/user', userRoutes)

// listening at port 3000
app.listen(3000, function() {
    console.log("Server is listening on port 3000!");
})

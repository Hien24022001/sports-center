const express = require('express');
const app = express();
const cors = require('cors');
const userRoutes = require("./routes/userRoutes");
const courseRoutes = require("./routes/courseRoutes");
const maintainRoutes = require("./routes/maintainRoutes");
const {connection} = require("./connectDB")

app.use(cors());

// handling incoming data
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// route
app.get('/', (req, res, next) => {
    res.send('API is running!')
})
app.use('/user', userRoutes)
app.use('/course', courseRoutes)
app.use('/maintain', maintainRoutes)

// listening at port 3000
app.listen(5000, function() {
    console.log("Server is listening on port 5000!");
})

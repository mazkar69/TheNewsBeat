const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv').config();

console.log(process.env.NODE_ENV);

//Importing database
require('./config/db');

//To read the data from the req body
app.use(express.json());
app.use(express.urlencoded());

// post at which Server is running.
const port = process.env.PORT || 5000;

const newsRoutes = require('./routes/news')

const contactRoutes = require('./routes/contact');

const commentRoutes = require('./routes/comment')


// Routes here..........

//For Comment route
app.use('/api', commentRoutes)

// To get news.
app.use("/api", newsRoutes)

//For contact route
app.use('/api/contact', contactRoutes);

//Admin router
app.use('/admin', require('./routes/admin'))




// =====================Deployment=====================
if (process.env.NODE_ENV == 'production') {
    app.use(express.static(path.join(__dirname, "client","build")))
    app.get('*',(req,res)=>{
        res.sendFile(path.join(__dirname, "client",  "build", "index.html"))
    })
}
else {
    app.get("/", (req, res) => {
        res.send("Server is running.............")
    })
}




// Listing...................

app.listen(port, () => {
    console.log(" Servier Running at port " + port);
})  
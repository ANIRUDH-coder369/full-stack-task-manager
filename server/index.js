require('dotenv').config()


const express = require('express')

const mongoose = require('mongoose')

const app = express()

mongoose.connect(process.env.MONGO_URL)

app.use("/api/auth", require('./routes/auth.routes.js'))

app.use("/", (req, res) => {
    res.status(200).json({ message: `"Task manager api runing ....."${process.env.NODE_ENV} mode ` })
})

// app.use(express.json())// req.body require when data reuire from frontend 


mongoose.connection.once("open", () => {
    console.log('db connected ');
    app.listen(process.env.PORT, () => {
        console.log('server runing');
        console.log(`mode:${process.env.NODE_ENV}`);


    })

})
module.exports = app

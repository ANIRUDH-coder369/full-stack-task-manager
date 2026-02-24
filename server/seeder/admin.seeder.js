require('dotenv').config({ path: "./../.env" })

const mongoose = require('mongoose');
const User = require('../model/User.js');

const bcrypt = require('bcryptjs')

exports.seederAdmin = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('db connected');
        const result = await User.findOne({ role: "admin" })
        if (result) {
            console.log("admin already present");
            process.exit(1)

        }

        const hash = await bcrypt.hash("123", 10)
        await User.create({
            name: "admin",
            email: "admin@gmail.com",
            mobile: "7666423670",
            role: "admin",
            password: hash

        })
        console.log("admin seeder complte");
        process.exit(1)


    } catch (error) {
        console.log(error);
        process.exit(1)

    }
}


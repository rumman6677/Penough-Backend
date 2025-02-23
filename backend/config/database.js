const mongoose = require('mongoose');
require('dotenv').config();


exports.connectDB = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => {
            console.log('Database connected successfully');
        })
        .catch(error => {
            console.log(process.env.DATABASE_URL);
            console.log(`Error while connecting server with Database`);
            console.log(error);
            process.exit(1);
        })
};


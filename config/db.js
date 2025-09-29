const mongoose = require('mongoose');
require('dotenv').config();

// connect to db with mongoose
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1); // exit the process with a non-zero code
    }
};

module.exports = connectDB;
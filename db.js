//mongoose and connect to MongoDB (Database name Product)
const mongoose = require('mongoose');
const connectDB = () => {
    mongoose.connect(process.env.MONGO_URI)
    .then((con)=>console.log(`Database Connected: ${con.connection.host}`))
    .catch((err)=>console.log(err));
}

module.exports = connectDB
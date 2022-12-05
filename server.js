const app = require('./app');
require("dotenv").config({path:"config.env"});

const connectDB = require('./db');
connectDB();

const port = process.env.PORT


if(process.env.PRODUCTION === "true"){
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
      })
}

module.exports = app
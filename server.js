require("dotenv").config();
const { connect } = require("mongoose");
const app = require('./src/app');
const ConnectDB = require('./src/db/db');


const PORT = process.env.PORT

ConnectDB();

app.listen(PORT, ()=>{

    console.log(`server is running on ${PORT}`);

})

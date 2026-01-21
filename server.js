require("dotenv").config();
const app = require('./src/app');
const ConnectDB = require('./src/db/db');


const PORT = process.env.PORT

app.listen(PORT, ()=>{

    console.log(`server is running on ${PORT}`);

})
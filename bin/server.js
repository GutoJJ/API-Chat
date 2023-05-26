require("dotenv").config();
const app = require ("../src/api.js");

app.use((req,res,next)=>{
    next();
})
console.log(process.env.API_PORT);
let port = process.env.API_PIORT || 5000;
app.listen(port);
console.log(`listening on ${port}`);
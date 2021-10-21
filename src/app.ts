import express from 'express';
require('./database/connection');
const app = express();
const PORT = 3000


app.listen(PORT,():void=>{
    console.log(`Server start at port ${PORT}`);
})
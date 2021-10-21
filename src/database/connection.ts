import mongoose from "mongoose";
const url: string =
  "mongodb://akshay:s6TezIaVeXgiRJuN@cluster0-shard-00-00.9lb3l.mongodb.net:27017,cluster0-shard-00-01.9lb3l.mongodb.net:27017,cluster0-shard-00-02.9lb3l.mongodb.net:27017/todo-app?ssl=true&replicaSet=atlas-ix4euu-shard-0&authSource=admin&retryWrites=true&w=majority";
const options: Object = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose
  .connect(url, options)
  .then(() => {
    console.log("Connection Succesfull !!!");
  })
  .catch((err: any) => {
    console.error(err);
  });
module.exports = {mongoose};
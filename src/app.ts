import express from "express";
import { task } from "./routes/task.routes";
require("./database/connection");
const app = express();
const PORT = 3000;
app.use(express.json());
app.use("/tasks", task);
app.listen(PORT, (): void => {
  console.log(`Server start at port ${PORT}`);
});

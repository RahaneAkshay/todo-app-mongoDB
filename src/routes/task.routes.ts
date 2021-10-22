import { Request, Router, Response } from "express";
import { TaskModel } from "../model/task.model";
export const task = Router();

interface TaskResult {
  _id?: String;
  description: String;
  completed: Boolean;
}

task.get("/fetch", async (req: Request, res: Response): Promise<any> => {
  try {
    const result: TaskResult[] = await TaskModel.find();
    res.status(200).send(result);
  } catch (err: any) {
    res.status(400).send(err);
  }
});

task.post("/create", async (req: Request, res: Response): Promise<any> => {
  try {
    const result = await TaskModel.insertMany([req.body]);
    res.status(200).send(result);
  } catch (err: any) {
    res.status(400).send(err);
  }
});

task.patch("/update/:id", async (req: Request, res: Response): Promise<any> => {
  try {
    const _id: string = req.params.id;
    const result = await TaskModel.updateOne({ _id }, { $set: req.body });
    res.status(200).send(result);
  } catch (err: any) {
    res.status(400).send(err);
  }
});

task.delete("/delete/:id", async (req: Request, res: Response): Promise<any> => {
    try {
      const _id: string = req.params.id;
      const result = await TaskModel.deleteOne({_id});
      res.status(200).send(result);
    } catch (err: any) {
      res.status(400).send(err);
    }
  });

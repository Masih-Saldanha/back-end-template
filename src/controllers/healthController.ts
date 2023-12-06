import { Request, Response } from "express";

async function getHealth(req: Request, res: Response) {
  res.send("OK").status(200);
};

const healthController = {
  getHealth,
};

export default healthController;
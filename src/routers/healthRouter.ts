import { Router } from "express";

import healthController from "../controllers/healthController.js";

const healthRouter = Router();

healthRouter.get("/health", healthController.getHealth);

export default healthRouter;
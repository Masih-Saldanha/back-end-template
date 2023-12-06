import { Router } from "express";

import healthRouter from "./healthRouter.js";
// import exampleRouter from "./exampleRouter.js";

const router = Router();

router.use(healthRouter);
// router.use(exampleRouter);

export default router;
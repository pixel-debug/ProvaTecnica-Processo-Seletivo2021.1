import { Router } from "express";
import { timeMachineController } from "./DependencyInjection";

const router = Router();

router.get('/travel', timeMachineController.travelTO);

export { router }

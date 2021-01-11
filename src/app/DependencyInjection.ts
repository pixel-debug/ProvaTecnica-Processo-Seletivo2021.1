import TimeMachineController from "../Controllers/implementations/TimeMachineController";
import TravelProvider from "../providers/implementations/TravelProvider";
import TimeMachineService from "../Services/implementations/TimeMachineService"

const travelProvider = new TravelProvider();
const timeMachineService = new TimeMachineService(travelProvider);
const timeMachineController = new TimeMachineController(timeMachineService);

export { timeMachineService, timeMachineController };

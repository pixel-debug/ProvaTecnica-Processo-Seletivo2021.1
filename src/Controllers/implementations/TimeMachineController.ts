import ITimeMachineController from "../ITimeMachineController";
import { Request, Response, NextFunction } from "express";
import ITimeMachineService from "../../Services/ITimeMachineService";
import { TimeMachine } from "../../entities/TimeMachine";
import SimpleDate from "../../interfaces/SimpleDate";
import SpacePoint from "../../interfaces/SpacePoint";

class TimeMachineController implements ITimeMachineController{

    private timeMachineService : ITimeMachineService;

    constructor(timeMachineService:ITimeMachineService){
        this.timeMachineService = timeMachineService;
        this.travelTO = this.travelTO.bind(this);
    }

    async travelTO(request: Request, response: Response, next:NextFunction){
        /**
         * Pegar dados da request e mandar para o camada de serviços
         */
        const currentPosition:SpacePoint = {
            x: 11111111,
            y: 22222222,
            z: 33333333
        }
        const currentDate:SimpleDate = {
            year: 2020,
            month: 12,
            day: 7
        }

        const targetDate:SimpleDate = {
            year: 253,
            month: 6,
            day: 3
        }


        const timeMachine = new TimeMachine(currentPosition, currentDate, targetDate);
        
        this.timeMachineService.calculateCoordinates(timeMachine);

        return response.status(200).send(
            "<h1>Confira o log da aplicação para os resultados do sistema de viajem no tempo!<h1/>"
        );
    }
}

export default TimeMachineController;
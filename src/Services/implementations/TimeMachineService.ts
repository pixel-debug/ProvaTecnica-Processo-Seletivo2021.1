import SimpleDate from "../../interfaces/SimpleDate";
import SpacePoint from "../../interfaces/SpacePoint";
import { TimeMachine } from "../../entities/TimeMachine";
import calculateSpaceTime from "../../helpers/CalculateSpaceTime";
import calculateTimeBalance from "../../helpers/CalculateTimeBalance";
import calculateTimeDifferential from "../../helpers/CalculateTimeDifferential";
import ITimeMachineService from "../ITimeMachineService";
import synchronizePulsars from "../../helpers/SynchronizePulsars";
import ITravelProvider from "../../providers/ITravelProvider";

class TimeMachineService implements ITimeMachineService{

    private travelProvider:ITravelProvider;

    constructor(travelProvider:ITravelProvider){
        this.travelProvider = travelProvider;

        this.calculateCoordinates = this.calculateCoordinates.bind(this);
        this.getSolarSystemPosition = this.getSolarSystemPosition.bind(this);
        this.getGalaxyPosition = this.getGalaxyPosition.bind(this);
        this.getUniversePosition = this.getUniversePosition.bind(this);
    }

    async calculateCoordinates(timeMachine:TimeMachine): Promise<void> {

        const result:SpacePoint = this.getUniversePosition(timeMachine);

        console.log(result);

        await this.travelProvider.executeTravel(result);
         
        return;
    }

    getSolarSystemPosition(timeMachine:TimeMachine): SpacePoint {
        const sunDistance = 149600; //megaMetro -> Mm
        //constante necessária
        //CALC

        const timeDifferential = calculateTimeDifferential(timeMachine);

        let position:SpacePoint = {x:0,y:0,z:0};
        /**
         * Calculo com o position
         * Consulte o readme
         */

       
        return position;
    }

    getGalaxyPosition(timeMachine:TimeMachine): SpacePoint {
        const solarSystemPosition = this.getSolarSystemPosition(timeMachine);
        const timeBalance = calculateTimeBalance(timeMachine);
        //CALC
        let position:SpacePoint = {x:0,y:0,z:0};
        /**
         * Calculo com o position
         * Consulte o readme
         */
       
        return position;
    }

    getUniversePosition(timeMachine:TimeMachine): SpacePoint {
        const syncPulsars = synchronizePulsars(timeMachine);
        const spaceTime = calculateSpaceTime(timeMachine);

        const galaxyPosition = this.getGalaxyPosition(timeMachine);

        //CALC

        let position:SpacePoint = {x:0,y:0,z:0};
        /**
         * Calculo com o position
         * Consulte o readme
         */

        return position;
    }
    
}

export default TimeMachineService;
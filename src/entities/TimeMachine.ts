import SimpleDate from "../interfaces/SimpleDate";
import SpacePoint from "../interfaces/SpacePoint";

export class TimeMachine{

    public currentDate:SimpleDate;
    public targetDate:SimpleDate;
    public currentPosition:SpacePoint

    constructor(currentPosition:SpacePoint, currentDate:SimpleDate,targetDate:SimpleDate){
        this.currentDate = currentDate;
        this.currentPosition = currentPosition;
        this.targetDate = targetDate
    }

}
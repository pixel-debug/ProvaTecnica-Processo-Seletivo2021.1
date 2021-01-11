import { Request, Response, NextFunction } from "express";
import SimpleDate from "../interfaces/SimpleDate";
import SpacePoint from "../interfaces/SpacePoint";
import { TimeMachine } from "../entities/TimeMachine";

export default interface ITimeMachineService{
    calculateCoordinates(timeMachine:TimeMachine):Promise<void>;

    getUniversePosition(timeMachine:TimeMachine):SpacePoint;
    getGalaxyPosition(timeMachine:TimeMachine):SpacePoint;
    getSolarSystemPosition(timeMachine:TimeMachine):SpacePoint;
}
import { Request, Response, NextFunction } from "express";

export default interface ITimeMachineController{
    travelTO(request: Request, response:Response, next:NextFunction):Promise<Response>;
}
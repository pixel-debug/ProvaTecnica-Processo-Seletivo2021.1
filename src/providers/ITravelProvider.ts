import SpacePoint from "../interfaces/SpacePoint";

export default interface ITravelProvider{
    executeTravel(universePosition:SpacePoint):Promise<void>;
}
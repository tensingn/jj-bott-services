import { SeasonTypeTankNames } from "../names/season-type.tank.names";
import { DSTTankModel } from "./dst.tank.model";

export class GameTankModel {
	gameID: string;
	teamIDHome: string;
	teamIDAway: string;
	seasonType: SeasonTypeTankNames;
	DST: DSTTankModel;
}

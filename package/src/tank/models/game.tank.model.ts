import { SeasonTypeTankNames } from "../names/season-type.tank.names";

export class GameTankModel {
	gameID: string;
	teamIDHome: string;
	teamIDAway: string;
	seasonType: SeasonTypeTankNames;
}

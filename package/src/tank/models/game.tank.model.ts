import { SeasonTypeTankNames } from "../names/season-type.tank.names";
import { DSTTankModel } from "./dst.tank.model";
import { PlayerGameTankModel } from "./player-game.tank.model";

export class GameTankModel {
	gameID: string;
	teamIDHome: string;
	teamIDAway: string;
	seasonType: SeasonTypeTankNames;
	DST: DSTTankModel;
	playerStats: Map<string, PlayerGameTankModel>;
	gameWeek: string;
	season: string;
}

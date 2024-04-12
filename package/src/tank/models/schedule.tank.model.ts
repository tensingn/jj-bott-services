import { NFLTeamNames } from "@tensingn/son-of-botker-models";
import { GameTankModel } from "./game.tank.model";

export class ScheduleTankModel {
	team: NFLTeamNames;
	schedule: Array<GameTankModel>;
}

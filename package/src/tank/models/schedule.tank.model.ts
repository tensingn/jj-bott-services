import { NFLTeamNames } from "@tensingn/jj-bott-models";
import { GameTankModel } from "./game.tank.model";

export class ScheduleTankModel {
	team: NFLTeamNames;
	schedule: Array<GameTankModel>;
}

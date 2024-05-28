import { PlayerStatsModel } from "@tensingn/jj-bott-models/cjs/models/player-stats.model";

export class PlayerGameTankModel extends PlayerStatsModel {
	gameID: string;
	teamID: string;
	playerID: string;
	longName: string;
	fantasyPoints: string;
}

import { PositionNames } from "@tensingn/jj-bott-models";
import { SeasonStatsModel } from "@tensingn/jj-bott-models/cjs/models/season-stats.model";

export class PlayerTankModel {
	playerID: string;
	sleeperBotID: string;
	injury: {
		description: string;
		injDate: string;
		designation: string;
	};
	teamID: string;
	pos: PositionNames;
	stats: SeasonStatsModel;
	longName: string;
	lastGamePlayed: string;
}

export class DSTTankModel {
	away: DSTTeamTankModel;
	home: DSTTeamTankModel;
}

export class DSTTeamTankModel {
	teamID: string;
	defTD: string;
	defensiveInterceptions: string;
	sacks: string;
	ydsAllowed: string;
	fumblesRecovered: string;
	ptsAllowed: string;
	safeties: string;
}

export class NFLBoxScoreOptions {
	gameID: string;
	playByPlay?: boolean;
	fantasyPoints: boolean = true;
	twoPointConversions?: number;
	passYards?: number;
	passAttempts?: number;
	passTD?: number;
	passCompletions?: number;
	passInterceptions?: number;
	pointsPerReception?: number;
	carries?: number;
	rushYards?: number;
	rushTD?: number;
	fumbles?: number;
	receivingYards?: number;
	receivingTD?: number;
	targets?: number;
	defTD?: number;
	fgMade?: number;
	fgMissed?: number;
	xpMade?: number;
	xpMissed?: number;
}

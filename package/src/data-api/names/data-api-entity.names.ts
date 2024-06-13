export const DataAPIEntityNamesArray = [
	"teams",
	"players",
	"nflTeams",
] as const;
export type DataAPIEntityNames = (typeof DataAPIEntityNamesArray)[number];

export const DataAPISubEntityNamesArray = ["playerGames"] as const;
export type DataAPISubEntityNames = (typeof DataAPISubEntityNamesArray)[number];

export const DataAPIActionNamesArray = ["search"] as const;
export type DataAPIActionNames = (typeof DataAPISubEntityNamesArray)[number];

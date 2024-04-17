export const DataAPIEntityNamesArray = [
	"teams",
	"players",
	"nflTeams",
] as const;
export type DataAPIEntityNames = (typeof DataAPIEntityNamesArray)[number];

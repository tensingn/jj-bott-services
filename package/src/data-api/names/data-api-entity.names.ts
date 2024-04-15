export const DataAPIEntityNamesArray = [
	"teams",
	"players",
	"nfl-teams",
] as const;
export type DataAPIEntityNames = (typeof DataAPIEntityNamesArray)[number];

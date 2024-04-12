export const SeasonTypeSleeperNamesArray = [
	"pre",
	"post",
	"regular",
	"off",
] as const;
export type SeasonTypeSleeperNames =
	(typeof SeasonTypeSleeperNamesArray)[number];

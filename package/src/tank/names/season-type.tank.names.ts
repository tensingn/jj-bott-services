export const SeasonTypeTankNamesArray = [
	"Preseason",
	"Postseason",
	"Regular Season",
] as const;
export type SeasonTypeTankNames = (typeof SeasonTypeTankNamesArray)[number];

// tank
export { TankService } from "./tank/tank.service";
export { GameTankModel } from "./tank/models/game.tank.model";
export { NFLTeamTankModel } from "./tank/models/nfl-team.tank.model";
export { ScheduleTankModel } from "./tank/models/schedule.tank.model";
export {
	SeasonTypeTankNames,
	SeasonTypeTankNamesArray,
} from "./tank/names/season-type.tank.names";

// sleeper
export { SleeperService } from "./sleeper/sleeper.service";
export { NFLStateSleeperModel } from "./sleeper/models/nfl-state.sleeper.model";
export {
	SeasonTypeSleeperNames,
	SeasonTypeSleeperNamesArray,
} from "./sleeper/names/season-type.sleeper.names";

// data api
export { DataAPIService } from "./data-api/data-api.service";
export {
	DataAPIEntityNames,
	DataAPIEntityNamesArray,
} from "./data-api/names/data-api-entity.names";

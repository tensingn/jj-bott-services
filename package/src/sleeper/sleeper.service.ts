import axios from "axios";
import { NFLStateSleeperModel } from "./models/nfl-state.sleeper.model";
import {
	MatchupSleeperModel,
	PlayersSleeperModel,
	RosterSleeperModel,
	SeasonSleeperModel,
	UserSleeperModel,
} from "@tensingn/jj-bott-models";

export class SleeperService {
	private readonly url = "https://api.sleeper.app/v1";

	constructor() {}

	getNFLState(): Promise<NFLStateSleeperModel> {
		return this.get<NFLStateSleeperModel>("state/nfl");
	}

	getAllPlayers(): Promise<PlayersSleeperModel> {
		return this.get<PlayersSleeperModel>("players/nfl");
	}

	getSeason(seasonID: string): Promise<SeasonSleeperModel> {
		return this.get<SeasonSleeperModel>(`league/${seasonID}`);
	}

	getAllRostersForSeason(seasonID: string): Promise<Array<RosterSleeperModel>> {
		return this.get<Array<RosterSleeperModel>>(`league/${seasonID}/rosters`);
	}

	getAllMatchupsForWeek(seasonID: string, week: string): Promise<Array<MatchupSleeperModel>> {
		return this.get<Array<MatchupSleeperModel>>(`league/${seasonID}/matchups/${week}`);
	}

	getAllUsersForSeason(seasonID: string): Promise<Array<UserSleeperModel>> {
		return this.get<Array<UserSleeperModel>>(`league/${seasonID}/users`);
	}

	private async get<TResponse>(uri: string, params: {} = {}): Promise<TResponse> {
		const res = await axios.get<TResponse>(`${this.url}/${uri}`, {
			params,
		});

		return res.data;
	}
}

import axios from "axios";
import { NFLStateSleeperModel } from "./models/nfl-state.sleeper.model";
import { PlayersSleeperModel } from "@tensingn/son-of-botker-models";

export class SleeperService {
	private readonly url = "https://api.sleeper.app/v1";

	constructor() {}

	getNFLState(): Promise<NFLStateSleeperModel> {
		return this.get<NFLStateSleeperModel>("state/nfl");
	}

	getAllPlayers(): Promise<PlayersSleeperModel> {
		return this.get<PlayersSleeperModel>("players/nfl");
	}

	private async get<TResponse>(
		uri: string,
		params: {} = {}
	): Promise<TResponse> {
		const res = await axios.get<TResponse>(`${this.url}/${uri}`, {
			params,
		});

		return res.data;
	}
}

import axios from "axios";
import { NFLStateSleeperModel } from "./models/nfl-state.sleeper.model";

export class SleeperService {
	private readonly url = "https://api.sleeper.app/v1";

	constructor() {}

	async getNFLState(): Promise<NFLStateSleeperModel> {
		return this.get<NFLStateSleeperModel>("state/nfl");
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

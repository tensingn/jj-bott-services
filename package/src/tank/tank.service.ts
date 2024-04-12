import { NFLTeamTankModel } from "./models/nfl-team.tank.model";
import axios from "axios";
import { ScheduleTankModel } from "./models/schedule.tank.model";

export class TankService {
	private readonly url =
		"https://tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com";

	constructor() {}

	async getAllNFLTeams(): Promise<Array<NFLTeamTankModel>> {
		return await this.get<Array<NFLTeamTankModel>>(`getNFLTeams`);
	}

	async getNFLTeamSchedule(
		teamID: string,
		season: string
	): Promise<ScheduleTankModel> {
		const schedule = await this.get<ScheduleTankModel>("getNFLTeamSchedule?", {
			teamID,
			season,
		});

		return schedule;
	}

	private async get<TResponse>(
		uri: string,
		params: {} = {}
	): Promise<TResponse> {
		const res = await axios.get<TankResponse<TResponse>>(`${this.url}/${uri}`, {
			params,
			headers: {
				"X-RapidAPI-Key": "f07b28bde0msh3a50827e037928dp14760bjsna64df9735135",
				"X-RapidAPI-Host":
					"tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com",
			},
		});

		return res.data.body;
	}
}

class TankResponse<TBody> {
	statusCode: number;
	body: TBody;
}

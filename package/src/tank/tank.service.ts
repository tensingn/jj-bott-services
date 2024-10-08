import { NFLTeamTankModel } from "./models/nfl-team.tank.model";
import axios from "axios";
import { ScheduleTankModel } from "./models/schedule.tank.model";
import { PlayerTankModel } from "./models/player.tank.model";
import { GameTankModel } from "./models/game.tank.model";
import { NFLBoxScoreOptions } from "./options/nfl-box-score.options";
import { WeeklyNFLScheduleOptions } from "./options/weekly-nfl-schedule.options";

export class TankService {
	private readonly url =
		"https://tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com";

	constructor(private readonly tankKey: string) {}

	async getAllNFLTeams(): Promise<Array<NFLTeamTankModel>> {
		return await this.get<Array<NFLTeamTankModel>>(`getNFLTeams`);
	}

	async getNFLTeamSchedule(
		teamAbv: string,
		season: string
	): Promise<ScheduleTankModel> {
		const schedule = await this.get<ScheduleTankModel>("getNFLTeamSchedule", {
			teamAbv,
			season,
		});

		return schedule;
	}

	async getPlayerInformation(
		playerID: string,
		getStats: boolean = false
	): Promise<PlayerTankModel> {
		const player = await this.get<PlayerTankModel>("getNFLPlayerInfo", {
			playerID,
			getStats,
		});

		return player;
	}

	async getNFLBoxScore(options: NFLBoxScoreOptions): Promise<GameTankModel> {
		const game = await this.get<GameTankModel>("getNFLBoxScore", {
			...options,
		});

		return game;
	}

	async getWeeklyNFLSchedule(
		options: WeeklyNFLScheduleOptions
	): Promise<Array<GameTankModel>> {
		return await this.get<Array<GameTankModel>>("getNFLGamesForWeek", options);
	}

	private async get<TResponse>(
		uri: string,
		params: {} = {}
	): Promise<TResponse> {
		const res = await axios.get<TankResponse<TResponse>>(`${this.url}/${uri}`, {
			params,
			headers: {
				"X-RapidAPI-Key": this.tankKey,
				"X-RapidAPI-Host":
					"tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com",
			},
		});

		if (res.data.error) {
			throw new Error(res.data.error);
		}

		return res.data.body;
	}
}

class TankResponse<TBody> {
	statusCode: number;
	body: TBody;
	error: string;
}

import axios, { Method } from "axios";
import { DataAPIEntityNames } from "./names/data-api-entity.names";

export class DataAPIService {
	constructor(private readonly url: string) {}

	async create<TResponse>(
		entity: DataAPIEntityNames,
		createObj: object
	): Promise<TResponse> {
		let res = await axios.post<TResponse>(`${this.url}/${entity}`, createObj);

		return res.data;
	}

	async findMany<TResponse>(
		entity: DataAPIEntityNames,
		startAfter: string = null,
		limit: number = 10
	): Promise<Array<TResponse>> {
		let res = await axios.get<Array<TResponse>>(`${this.url}/${entity}`, {
			params: { startAfter, limit },
		});

		return res.data;
	}

	async findOne<TResponse>(
		entity: DataAPIEntityNames,
		id: string
	): Promise<TResponse> {
		let res = await axios.get<TResponse>(`${this.url}/${entity}/${id}`);

		return res.data;
	}

	async update<TResponse>(
		entity: DataAPIEntityNames,
		id: string,
		updateObj: object
	): Promise<TResponse> {
		let res = await axios.post<TResponse>(
			`${this.url}/${entity}/${id}`,
			updateObj
		);

		return res.data;
	}

	async remove(entity: DataAPIEntityNames, id: string): Promise<void> {
		await axios.delete(`${this.url}/${entity}/${id}`);
	}

	async request<TResponse>(
		method: Method,
		entity: DataAPIEntityNames,
		resource: string,
		params: object
	): Promise<TResponse> {
		let res = await axios.request<TResponse>({
			method,
			url: `${this.url}/${entity}/${resource}`,
			params,
		});

		return res.data;
	}
}

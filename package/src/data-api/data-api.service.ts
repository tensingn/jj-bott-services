import { GoogleAuth, IdTokenClient } from "google-auth-library";
import { DataAPIEntityNames } from "./names/data-api-entity.names";

export class DataAPIService {
	private client: IdTokenClient;

	constructor(private readonly url: string) {}

	async init(): Promise<void> {
		if (!this.client) {
			this.client = await new GoogleAuth().getIdTokenClient(this.url);
		}
	}

	async create<TResponse>(
		entity: DataAPIEntityNames,
		createObj: object
	): Promise<TResponse> {
		let res = await this.client.request<TResponse>({
			url: `${this.url}/${entity}`,
			data: createObj,
			method: "POST",
		});

		return res.data;
	}

	async bulkCreate(
		entity: DataAPIEntityNames,
		createObjs: Array<object>
	): Promise<void> {
		const body = {};
		body[entity] = createObjs;

		await this.client.request({
			url: `${this.url}/${entity}/bulkCreate`,
			data: body,
			method: "POST",
		});
	}

	async bulkUpdate(
		entity: DataAPIEntityNames,
		updateObjs: Array<object>
	): Promise<void> {
		const body = {};
		body[entity] = updateObjs;

		await this.client.request({
			url: `${this.url}/${entity}/bulkUpdate`,
			data: body,
			method: "PATCH",
		});
	}

	async findMany<TResponse>(
		entity: DataAPIEntityNames,
		startAfter: string = null,
		limit: number = 10
	): Promise<Array<TResponse>> {
		let res = await this.client.request<Array<TResponse>>({
			url: `${this.url}/${entity}`,
			params: { startAfter, limit },
			method: "GET",
		});

		return res.data;
	}

	async findOne<TResponse>(
		entity: DataAPIEntityNames,
		id: string
	): Promise<TResponse> {
		let res = await this.client.request<TResponse>({
			url: `${this.url}/${entity}/${id}`,
			method: "GET",
		});

		return res.data;
	}

	async update<TResponse>(
		entity: DataAPIEntityNames,
		id: string,
		updateObj: object
	): Promise<TResponse> {
		let res = await this.client.request<TResponse>({
			url: `${this.url}/${entity}/${id}`,
			data: updateObj,
			method: "POST",
		});

		return res.data;
	}

	async remove(entity: DataAPIEntityNames, id: string): Promise<void> {
		await this.client.request({
			url: `${this.url}/${entity}/${id}`,
			method: "DELETE",
		});
	}

	async request<TResponse>(
		method:
			| "GET"
			| "HEAD"
			| "POST"
			| "DELETE"
			| "PUT"
			| "CONNECT"
			| "OPTIONS"
			| "TRACE"
			| "PATCH",
		entity: DataAPIEntityNames,
		resource: string,
		params: object
	): Promise<TResponse> {
		let res = await this.client.request<TResponse>({
			url: `${this.url}/${entity}/${resource}`,
			params,
			method,
		});

		return res.data;
	}
}

import { GoogleAuth, IdTokenClient } from "google-auth-library";
import { DataAPIActionNames, DataAPIEntityNames, DataAPISubEntityNames } from "./names/data-api-entity.names";

export class DataAPIService {
	private client: IdTokenClient;

	constructor(private readonly url: string) {}

	async init(): Promise<void> {
		if (!this.client) {
			this.client = await new GoogleAuth().getIdTokenClient(this.url);
		}
	}

	async create<TResponse>(entity: DataAPIEntityNames, createObj: object): Promise<TResponse> {
		let res = await this.client.request<TResponse>({
			url: `${this.url}/${entity}`,
			data: createObj,
			method: "POST",
		});

		return res.data;
	}

	async createSubEntity<TResponse>(
		entity: DataAPIEntityNames,
		entityID: string,
		subEntity: DataAPISubEntityNames,
		createObj: object
	): Promise<TResponse> {
		let res = await this.client.request<TResponse>({
			url: `${this.url}/${entity}/${entityID}/${subEntity}`,
			data: createObj,
			method: "POST",
		});

		return res.data;
	}

	async bulkCreate(entity: DataAPIEntityNames, createObjs: Array<object>): Promise<void> {
		const body = {};
		body[entity] = createObjs;

		await this.client.request({
			url: `${this.url}/${entity}/bulkCreate`,
			data: body,
			method: "POST",
		});
	}

	async bulkCreateSubEntity(
		entity: DataAPIEntityNames,
		entityID: string,
		subEntity: DataAPISubEntityNames,
		createObjs: Array<object>
	) {
		const body = {};
		body[subEntity] = createObjs;

		await this.client.request({
			url: `${this.url}/${entity}/${entityID}/${subEntity}/bulkCreate`,
			data: body,
			method: "POST",
		});
	}

	async bulkUpdate(entity: DataAPIEntityNames, updateObjs: Array<object>): Promise<void> {
		const body = {};
		body[entity] = updateObjs;

		await this.client.request({
			url: `${this.url}/${entity}/bulkUpdate`,
			data: body,
			method: "PATCH",
		});
	}

	async bulkUpdateSubEntity(
		entity: DataAPIEntityNames,
		entityID: string | null,
		subEntity: DataAPISubEntityNames,
		createObjs: Array<object>
	) {
		const body = {};
		body[subEntity] = createObjs;

		if (entityID) {
			await this.client.request({
				url: `${this.url}/${entity}/${entityID}/${subEntity}/bulkUpdate`,
				data: body,
				method: "PATCH",
			});
		} else {
			await this.client.request({
				url: `${this.url}/${entity}/${subEntity}/bulkUpdate`,
				data: body,
				method: "PATCH",
			});
		}
	}

	async findMany<TResponse>(
		entity: DataAPIEntityNames,
		startAfter: string = null,
		limit: number = 10,
		additionalParams: {} = null
	): Promise<Array<TResponse>> {
		let params = { startAfter, limit };

		if (additionalParams && Object.keys(additionalParams).length) {
			params = { ...params, ...additionalParams };
		}

		let res = await this.client.request<Array<TResponse>>({
			url: `${this.url}/${entity}`,
			params,
			method: "GET",
		});

		return res.data;
	}

	async findManySubEntities<TResponse>(
		entity: DataAPIEntityNames,
		entityID: string,
		subEntity: DataAPISubEntityNames,
		startAfter: string = null,
		limit: number = 10
	) {
		let res = await this.client.request<Array<TResponse>>({
			url: `${this.url}/${entity}/${entityID}/${subEntity}`,
			params: { startAfter, limit },
			method: "GET",
		});

		return res.data;
	}

	async findOne<TResponse>(entity: DataAPIEntityNames, id: string): Promise<TResponse> {
		let res = await this.client.request<TResponse>({
			url: `${this.url}/${entity}/${id}`,
			method: "GET",
		});

		return res.data;
	}

	async update<TResponse>(entity: DataAPIEntityNames, id: string, updateObj: object): Promise<TResponse> {
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

	async performAction<TActionResult>(
		entity: DataAPIEntityNames,
		entityID: string | null,
		subEntity: DataAPISubEntityNames | null,
		action: DataAPIActionNames,
		body: object
	): Promise<TActionResult> {
		let actionResult: TActionResult = null;

		if (subEntity) {
			if (entityID) {
				let res = await this.client.request<TActionResult>({
					url: `${this.url}/${entity}/${entityID}/${subEntity}/${action}`,
					data: body,
					method: "POST",
				});

				actionResult = res.data;
			} else {
				let res = await this.client.request<TActionResult>({
					url: `${this.url}/${entity}/${subEntity}/${action}`,
					data: body,
					method: "POST",
				});

				actionResult = res.data;
			}
		} else {
			let res = await this.client.request<TActionResult>({
				url: `${this.url}/${entity}/${action}`,
				data: body,
				method: "POST",
			});

			actionResult = res.data;
		}

		return actionResult;
	}

	async request<TResponse>(
		method: "GET" | "HEAD" | "POST" | "DELETE" | "PUT" | "CONNECT" | "OPTIONS" | "TRACE" | "PATCH",
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

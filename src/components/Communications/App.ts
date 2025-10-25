import { IApi, IOrder, IOrderResult, IProductList } from "../../types";

export class AppAPI {
    private _baseApi: IApi;

    constructor(baseApi: IApi) {
        this._baseApi = baseApi
    }

    getProductList(): Promise<IProductList> {
        return this._baseApi.get<IProductList>('/product/');
    }

    postOrder(order: IOrder): Promise<IOrderResult> {
        return this._baseApi.post<IOrderResult>('/order/', order)
    }
}
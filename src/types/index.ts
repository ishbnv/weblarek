export type ApiPostMethods = 'POST' | 'PUT' | 'DELETE';

export interface IApi {
    get<T extends object>(uri: string): Promise<T>;
    post<T extends object>(uri: string, data: object, method?: ApiPostMethods): Promise<T>;
}

export interface IProduct {
    id: string;
    description: string;
    image: string;
    title: string;
    category: string;
    price: number | null;
} 

export type TPayment = 'cash' | 'card' | '';

export interface IBuyer {
  payment: TPayment;
  email: string;
  phone: string;
  address: string;
}

export interface IProductList {
  total: number;
  items: IProduct[];
}

export interface IOrder extends IBuyer {
    total: number,
    items: string[]
} 

export interface IOrderResult {
  id: string;
  total: number;
}
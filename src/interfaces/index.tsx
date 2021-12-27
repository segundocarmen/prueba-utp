import { ProductInterface } from './product/product.interface';

export * from './product/product.interface';
export * from './toast/toast.interface';

export interface RequestInterface {
    config: any;
    data: ProductInterface[];
    request: any;
    headers: any;
    status: number;
    statusText: string;
}
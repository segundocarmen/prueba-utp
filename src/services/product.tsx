import axios from 'axios';
import { ApiConstants } from '../utils/Constants';
import { DrinksInterface } from '../interfaces/index';

export const GetProducts = () => {
    return axios.get<DrinksInterface>(`${process.env.REACT_APP_PUBLIC_API_ENDPOINT}/${ApiConstants.ApiProducts}`);
}

export const GetProductId = (id: string) => {
    return axios.get<DrinksInterface>(`${process.env.REACT_APP_PUBLIC_API_ENDPOINT}/${ApiConstants.ApiSearchProducts}${id}`);
}
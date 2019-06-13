import { IProvince } from './iprovince'

export interface ICustomer {
    id: number;
    firstName: string;
    lastName: string;
    gender: string;
    address: string;
    city: string;
    province: IProvince;
}

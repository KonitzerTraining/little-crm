import {Address} from './address';

export interface Customer {
  id: number; // identnummer
  tag: string; // tag, stichwort
  name?: string;
  address?: Address;
  phone?: string;
  credit?: number;
}

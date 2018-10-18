import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Customer} from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  public getCustomer() {
    return this.http.get('http://localhost:3000/customers');
  }
  public getOneCustomer(id) {
    return this.http.get(`http://localhost:3000/customers/${id}`);
  }

  public deleteCustomer(id: number) {
    return this.http.delete(`http://localhost:3000/customers/${id}`);
  }

  public postCustomer(customer: Customer) {
    return this.http.post('http://localhost:3000/customers', customer);
  }

  public putCustomer(customer: Customer) {
    return this.http.put(`http://localhost:3000/customers/${customer.id}`, customer);
  }
}

import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../customer.service';
import {Customer} from '../customer';
import {Router} from '@angular/router';


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  customers: Customer[];
  inCreateMode = false;

  constructor(
    private customerService: CustomerService,
    private route: Router
  ) {
  }

  ngOnInit() {
    this.getCustomers();
  }

  onCreation(e) {
    if (e) {
      this.getCustomers();
    }
    this.inCreateMode = false;
  }

  getCustomers() {
    this.customerService.getCustomer()
      .subscribe((customers: Customer[]) => {
        this.customers = customers;
      });
  }

  delete(id: number) {
    this.customerService.deleteCustomer(id)
      .subscribe(() => {
        this.getCustomers();
      })
  }

  edit(id) {
    this.route.navigate([`/customers/${id}`]).then(
      () => {
        // moment
      }
    );
  }
}

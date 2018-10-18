import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CustomerService} from '../customer.service';
import {Customer} from '../customer';
import {Address} from '../address';


@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss']
})
export class CustomerEditComponent implements OnInit {
  id: number;
  customer: Customer = {address: {} as Address} as Customer;

  constructor(
    private activatedRoute: ActivatedRoute,
    private customerService: CustomerService,
    private route: Router) {
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    this.getOneCustomer();
  }

  private getOneCustomer() {
    this.customerService.getOneCustomer(this.id)
      .subscribe((customer: Customer) => {
        this.customer = customer
      })
  }

  save() {
    this.customerService.putCustomer(this.customer)
      .subscribe(() => {
        this.route.navigate(['/customers']);
      })
  }

  cancel() {
        this.route.navigate(['/customers']);
  }
}

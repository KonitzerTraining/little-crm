import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Customer} from '../customer';
import {Address} from '../address';
import {CustomerService} from '../customer.service';

@Component({
  selector: 'app-customer-new',
  templateUrl: './customer-new.component.html',
  styleUrls: ['./customer-new.component.scss']
})
export class CustomerNewComponent implements OnInit {

  @Output() creation = new EventEmitter();

  customer: Customer = {
    address: {} as Address
  } as Customer;


  constructor(private customerService: CustomerService) { }

  ngOnInit() {
  }

  cancel() {
    this.creation.emit(false);
  }

  create() {
    this.customerService.postCustomer(this.customer)
      .subscribe(() => {
        this.creation.emit(true);
      })
  }

}

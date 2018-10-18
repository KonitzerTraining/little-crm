import { Component } from '@angular/core';
import {environment} from '../environments/environment';
import {Customer} from './customer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Little CRM';
  customers: Customer[];
  productionFlag = environment.production;
}

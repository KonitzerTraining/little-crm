import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { ImprintComponent } from './imprint/imprint.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { DefaultComponent } from './default/default.component';
import {CustomerService} from './customer.service';
import {HttpClientModule} from '@angular/common/http';
import { TemplateComponent } from './template/template.component';
import {FormsModule} from '@angular/forms';
import { TaxPipe } from './tax.pipe';
import { TeaserDirective } from './teaser.directive';
import { CustomerNewComponent } from './customer-new/customer-new.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    ImprintComponent,
    CustomerListComponent,
    DefaultComponent,
    TemplateComponent,
    TaxPipe,
    TeaserDirective,
    CustomerNewComponent,
    CustomerEditComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {StartComponent} from './start/start.component';
import {ImprintComponent} from './imprint/imprint.component';
import {CustomerListComponent} from './customer-list/customer-list.component';
import {DefaultComponent} from './default/default.component';
import {TemplateComponent} from './template/template.component';
import {CustomerEditComponent} from './customer-edit/customer-edit.component';

const routes: Routes = [
  {
    path: 'start',
    component: StartComponent
  },
  {
    // Weiterleitung
    path: '',
    redirectTo: '/start',
    pathMatch: 'full'
  },
  {
    path: 'imprint',
    component: ImprintComponent
  },
  {
    path: 'customers',
    component: CustomerListComponent
  },
  {
    path: 'customers/:id',
    component: CustomerEditComponent
  },
  {
    path: 'template',
    component: TemplateComponent
  },
  {
    // Wildcard
    path: '**',
    component: DefaultComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

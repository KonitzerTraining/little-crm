import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {

  interpolD = 234;

  name = 'Hans';

  flag = true;
  status = 'guest';

  constructor() { }

  ngOnInit() {
  }

  click (config, e) {
    this.status = config;
    console.log(e);
  }

}

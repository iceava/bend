import {Component, OnInit} from '@angular/core';
import {ThingsModel} from "../../../shared/models/Things-model";
import {DataServiceService} from "../../../shared/service/data-service.service";
import {Observable} from "rxjs";

@Component({
   selector: 'app-things-component',
   templateUrl: './things.component.html',
   styleUrls: ['./things.component.scss'],
})
export class ThingsComponent implements OnInit {

  things!: Observable<Array<ThingsModel>>




  constructor(public svc: DataServiceService) {
    this.getThings()
  }

  ngOnInit(): void {
    ''
  }

  getThings():void {
    this.things = this.svc.getThings()
  }

}

import {AfterViewInit, Component, OnDestroy} from '@angular/core';
import { AreasModel } from '../../../shared/models/Areas-model';
import { DataServiceService } from '../../../shared/service/data-service.service';
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";
import {ThingsModel} from "../../../shared/models/Things-model";

@Component({
  selector: 'app-thing-component',
  templateUrl: './thing-component.component.html',

})
export class ThingComponentComponent implements AfterViewInit, OnDestroy {
  areas: Array<AreasModel> = new Array<AreasModel>();
  things!: Array<ThingsModel>;

  destroy$: Subject<boolean> = new Subject<boolean>();


  constructor(public svc: DataServiceService) {}

  ngAfterViewInit(): void {
    this.getThings();
  }

  getThings(): void {
    this.svc.getThings().pipe(takeUntil(this.destroy$))
      .subscribe((things) => (this.things = things));
  }

  getArea($event: any): void {
    this.areas = $event;
  }

  getZone(th: ThingsModel): string {
    return this.areas.find((el: AreasModel) => el.areaId === th.areaId)!.name;
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}

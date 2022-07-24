import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ThingsModel} from '../../../shared/models/Things-model';
import {DataServiceService} from '../../../shared/service/data-service.service';
import {Observable} from 'rxjs';
import {AreasModel} from '../../../shared/models/Areas-model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-things-component',
   templateUrl: './things.component.html',
   styleUrls: ['./things.component.scss'],
})
export class ThingsComponent implements AfterViewInit {
   areas: Observable<Array<AreasModel>> = new Observable<Array<AreasModel>>();

   things!: Observable<Array<ThingsModel>>;

   constructor(public svc: DataServiceService,
               protected cdr: ChangeDetectorRef
               ) {}

   ngAfterViewInit(): void {
      this.getThings();
   }



    getAreasObservable(event: Observable<Array<AreasModel>>): any {
      this.areas = event;
      return this.areas;
   }


  private getThings(): void {
    this.things = this.svc.getThings();
    this.cdr.markForCheck()
  }
}

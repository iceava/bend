import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {AreasModel} from '../../../shared/models/Areas-model';
import {DataServiceService} from '../../../shared/service/data-service.service';

@Component({
   changeDetection: ChangeDetectionStrategy.OnPush,
   selector: 'app-areas-component',
   templateUrl: './areas.component.html',
   styleUrls: ['./areas.component.scss'],
})
export class AreasComponent implements OnInit, OnDestroy {
   areas!: AreasModel[];
   @Output() sentArea: EventEmitter<AreasModel[]> = new EventEmitter<AreasModel[]>();

   destroy$: Subject<boolean> = new Subject<boolean>();

   constructor(public svc: DataServiceService, protected cdr: ChangeDetectorRef) {}

   ngOnInit(): void {
      this.getAreas();
   }



   ngOnDestroy(): void {
      this.destroy$.next(true);
      this.destroy$.unsubscribe();
   }


  private getAreas(): void {
    this.svc
      .getAreas()
      .pipe(takeUntil(this.destroy$))
      .subscribe((areas: AreasModel[]) => {
        this.sentArea.emit(areas);
        this.cdr.detectChanges()
      });
  }
}

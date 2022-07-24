import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DataServiceService} from '../../../shared/service/data-service.service';
import {Observable} from 'rxjs';
import {AreasModel} from '../../../shared/models/Areas-model';

@Component({
   changeDetection: ChangeDetectionStrategy.OnPush,
   selector: 'app-area-component',
   templateUrl: './area-component.component.html',
   styleUrls: ['./area-component.component.scss'],
})
export class AreaComponentComponent implements OnInit {
   @Output() sentAreas: EventEmitter<Observable<Array<AreasModel>>> = new EventEmitter<Observable<Array<AreasModel>>>();

   constructor(private svc: DataServiceService) {}

   ngOnInit(): void {
      this.getArea();
   }

  private getArea(): any {
      this.sentAreas.emit(this.svc.getAreas());
   }
}

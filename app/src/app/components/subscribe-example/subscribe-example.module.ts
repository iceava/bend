import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreasComponent } from './areas-component/areas.component';
import {SubscribeExampleRoutingModule} from "./routes/subscribe-example-routing.module";
import {ThingComponentComponent} from "./thing-component/thing-component.component";




@NgModule({
  declarations: [
    AreasComponent,
    ThingComponentComponent
  ],

  imports: [
    CommonModule,
    SubscribeExampleRoutingModule
  ],
})
export class SubscribeExampleModule { }

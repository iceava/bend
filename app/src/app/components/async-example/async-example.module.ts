import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThingsComponent } from './things-component/things.component';
import {AsyncExampleRoutingModule} from "./routes/async-example-routing-module";
import {AreaComponentComponent} from "./area-component/area-component.component";



@NgModule({
  declarations: [
    ThingsComponent,
    AreaComponentComponent
  ],
  imports: [
    CommonModule,
    AsyncExampleRoutingModule
  ]
})
export class AsyncExampleModule { }

import {RouterModule, Routes} from "@angular/router";
import {ThingsComponent} from "../things-component/things.component";
import {NgModule} from "@angular/core";


const thingsRoute: Routes = [
  {
    path: '',
    component: ThingsComponent,
    data: {
    },
  },
];


@NgModule({
  imports: [RouterModule.forChild(thingsRoute)],
  exports: [RouterModule],
})
export class AreasRoutingModule {}

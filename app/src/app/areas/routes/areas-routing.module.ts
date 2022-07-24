import {RouterModule, Routes} from "@angular/router";
import {AreasComponent} from "../areas-component/areas.component";
import {NgModule} from "@angular/core";


const areasRoute: Routes = [
  {
    path: '',
    component: AreasComponent,
    data: {
    },
  },
];


@NgModule({
  imports: [RouterModule.forChild(areasRoute)],
  exports: [RouterModule],
})
export class AreasRoutingModule {}

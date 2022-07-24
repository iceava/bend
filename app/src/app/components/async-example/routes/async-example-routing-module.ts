import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {AreaComponentComponent} from "../area-component/area-component.component";
import {ThingsComponent} from "../things-component/things.component";


const asyncExampleRouting: Routes = [
  {
    path: '',
    component: ThingsComponent,
    data: {
    },
  },
];


@NgModule({
  imports: [RouterModule.forChild(asyncExampleRouting)],
  exports: [RouterModule],
})
export class AsyncExampleRoutingModule {}

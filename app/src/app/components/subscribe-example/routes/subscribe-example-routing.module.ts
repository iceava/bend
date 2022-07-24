import {RouterModule, Routes} from "@angular/router";
import {AreasComponent} from "../areas-component/areas.component";
import {NgModule} from "@angular/core";
import {ThingsComponent} from "../../async-example/things-component/things.component";
import {ThingComponentComponent} from "../thing-component/thing-component.component";


const subscribeRouting: Routes = [
  {
    path: '',
    component: ThingComponentComponent,
    data: {
    },
  },

  {
    path: '/:id', component: ThingsComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(subscribeRouting)],
  exports: [RouterModule],
})
export class SubscribeExampleRoutingModule {}

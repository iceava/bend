import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent,
    children: [
      {
        path: 'subscribe',
        loadChildren: () =>
          import('./components/subscribe-example/subscribe-example.module').then(
            (m) => m.SubscribeExampleModule
          ),
      },

      {
        path: 'async',
        loadChildren: () =>
          import('./components/async-example/async-example.module').then(
            (m) => m.AsyncExampleModule
          ),
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

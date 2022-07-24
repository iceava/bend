import {Component, OnInit} from '@angular/core';

@Component({
   selector: 'bend-async-example-component',
   templateUrl: './things.component.html',
   styleUrls: ['./things.component.scss'],
})
export class ThingsComponent implements OnInit {
   constructor() {}

   ngOnInit(): void {
     console.warn('')
   }
}

import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'buttons',
   templateUrl: './buttons.component.html',
   styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
   buttonHeading: string = "Buttons"
   goldInactive: boolean = false;
   silverInactive: boolean = false;
   copperInactive: boolean = false;
   trickInactive: boolean = false;
   currentPosition: number = 1;
   newPosition: number = 1;

   constructor() { }
   s
   ngOnInit() { }

   reactivate() {
      this.goldInactive = false;
      this.silverInactive = false;
      this.copperInactive = false;
   }

   moveButton() {
      while (this.newPosition === this.currentPosition) {
         this.newPosition = Math.floor(Math.random() * 3);
      }
      this.currentPosition = this.newPosition;
      if (this.newPosition === 0) {
         document.getElementById("moving-button").style.removeProperty("right")
         document.getElementById("moving-button").style.position = "absolute";
         document.getElementById("moving-button").style.left = "0";
      } else if (this.newPosition === 1) {
         document.getElementById("moving-button").style.removeProperty("right")
         document.getElementById("moving-button").style.removeProperty("left")
         document.getElementById("moving-button").style.removeProperty("position")
      } else {
         document.getElementById("moving-button").style.removeProperty("left")
         document.getElementById("moving-button").style.position = "absolute";
         document.getElementById("moving-button").style.right = "0";
      }
   }
}

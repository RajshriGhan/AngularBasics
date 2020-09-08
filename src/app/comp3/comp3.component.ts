import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp3',
  template: `<div>
                Big tech enthusiast
                <div>`,
  styles: [`
        div
        {
          color : blue;
          font-family: courier;
          font-size: 160%;
        }
  `]
})
export class Comp3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  template: `<div>
                Hello User
                <div>`,
  styles: [`
        div{
          color : red;
          border: 1px solid powderblue;
          margin: 5px;
        }
  `]
})
export class Comp1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

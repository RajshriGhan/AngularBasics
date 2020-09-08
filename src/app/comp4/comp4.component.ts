import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp4',
  template: `<div>
              Fascinated with serverless architecture 
                <div>`,
  styles: [`
        div
        {
          color : green;
          
          margin: 5px;
        }
  `]
})
export class Comp4Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

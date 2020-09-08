import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp2',
  template: `<div>
               I am a web developer
            <div>`,
  styles: [`
            div{
              color : purple;
            }
      `]
})
export class Comp2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp5',
  template: `<div>
              Thank you
    <div>`,
styles: [`
div
{
color : green;
font-family: verdana;
font-size: 300%;
}
`]
})
export class Comp5Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

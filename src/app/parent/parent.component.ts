import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  fruits = ['Mengo', 'Orange', 'Banana'];
  constructor() { }
  addFruit(item: string) {
    this.fruits.push(item);
  }
}

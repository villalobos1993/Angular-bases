import { Component} from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<hr>
             <h3>Counter: {{ counter }}</h3>
             <button (click)="addOne(1)">+1</button>
             <button (click)="resetCounter()">reset</button>
             <button (click)="addMinus(1)">-1</button>`,
  standalone: false,
})

export class CounterComponent{
  constructor() { }
  public counter: number = 10;

  addOne( value:number ):void  {
    this.counter += value;
  }

  addMinus( value:number ):void {
    this.counter -= value;
  }

  resetCounter(): void{
    this.counter = 10;
  }
}


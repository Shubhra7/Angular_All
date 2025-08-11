import { Component, signal } from '@angular/core';
import { Greeting } from '../components/greeting/greeting';
import { Counter } from '../components/counter/counter';

@Component({
  selector: 'app-home',
  imports: [Greeting,Counter],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  homeMessage = signal('Hello, World!!! done by passing data from Home to greeting.')

  keyUpHandler(event: KeyboardEvent){
    // console.log(`user typed something in the input ${Date()}`);
    console.log(`User pressed the ${event.key} key`);
    
  } 
}

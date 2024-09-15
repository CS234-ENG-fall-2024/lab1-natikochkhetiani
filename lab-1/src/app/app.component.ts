import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lab-1';
  message: string;
  counter: number;
  intervalId: any;
  constructor(){
    this.message = "String interpolation is useful!";
    this.counter =0;
  

   this.intervalId = setInterval(() =>{
      this.counter++;
    }, 1000);
    setTimeout(() => {
      clearInterval(this.intervalId); 
    }, 20000);
  }
}








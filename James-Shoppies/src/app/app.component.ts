import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {MoviesComponentComponent} from './movies-component/movies-component.component'; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'James-Shoppies';
  Results = 'test';
}

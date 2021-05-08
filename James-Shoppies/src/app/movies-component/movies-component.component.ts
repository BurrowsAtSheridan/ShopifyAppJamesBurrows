import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-component',
  templateUrl: './movies-component.component.html',
  styleUrls: ['./movies-component.component.css']
})

export class MoviesComponentComponent implements OnInit {
  @Input() result : any;

  constructor() { }

  ngOnInit(): void {
    console.log('MoviesComponent')
    console.log('movieresults + ' + this.result)
  }



}

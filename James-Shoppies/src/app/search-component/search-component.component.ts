
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {DataService} from '../data.service';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponentComponent implements OnInit {

  datab: any;
    
  searchForm = this.formBuilder.group({
    MovieTitle: ''
  });

  constructor(
    private formBuilder:FormBuilder,
    private http: HttpClient,
    private dataService: DataService,
    ){}
    
    

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      MovieTitle:'',
      
    });
  }
  onSubmit(): void{
    //this will call the movies search api and should return a movies object
    console.log(this.searchForm.value.MovieTitle);
    this.datab = this.dataService.sendGetRequest(this.searchForm.value.MovieTitle).subscribe((data: any[])=>{
      console.log(data);
    });
    console.log(20);
    console.log(this.datab); 
  }
  
  
}

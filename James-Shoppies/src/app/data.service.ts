import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DataService {

   RestApiServer = "http://www.omdbapi.com/?i=tt3896198&apikey=644bc587&t=j&r=json"
  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(){
    return this.httpClient.get(this.RestApiServer).pipe(map((result:any)=>result.data));
  }
}


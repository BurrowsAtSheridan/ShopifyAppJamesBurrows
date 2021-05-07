import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry,tap } from 'rxjs/operators';
import { movies} from '../movies';
@Injectable({
  providedIn: 'root'
})
export class DataService {

   RestApiServer = "http://www.omdbapi.com/?i=tt3896198&apikey=644bc587&t=j"
  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(): Observable<movies[]>{
    return this.httpClient.get<movies[]>(this.RestApiServer);
  }
}


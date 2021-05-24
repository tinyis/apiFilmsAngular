import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class HttpService{

    constructor(private http: HttpClient){ }

    search(title:string, year:string){

      return this.http.get('http://www.omdbapi.com/?apikey=250e7811&t='+title+'&y='+year);
    }
}

import { Component, OnInit } from '@angular/core';
import { HttpService} from './http.service';

@Component({
  selector: 'app-films',
  template: `<div class="form-group">
            <label>Title</label>
            <input id="title" class="form-control" type="text" name="login" [(ngModel)]="title" />
          </div>
          <div class="form-group">
            <label>Year</label>
            <input id="year" class="form-control" type="text" name="year" [(ngModel)]="year" />
          </div>
          <div class="form-group">
            <button class="btn btn-default" (click)="submit()">OK</button>
          </div>
          <div [ngSwitch]="done">
            <div *ngSwitchCase="'True'">
              <p>Title: {{res.Title}}</p>
              <p>Year: {{res.Year}}</p>
              <p>Rating: {{res.imdbRating}}</p>
              <p>Director: {{res.Director}}</p>
              <p>Actors: {{res.Actors}}</p>
            </div>
            <div *ngSwitchCase="'False'">
              <p>{{res.Error}}</p>
            </div>
         </div>`,
  styleUrls: ['./films.component.css'],
  providers: [HttpService]
})
export class FilmsComponent implements OnInit {

  title:string="";
  year:string="";
  res:any;
  done:string="";

  constructor(private httpService: HttpService){}

  submit(){

    this.httpService.search(this.title, this.year).subscribe((response) => {
      this.res=response;
      this.done=this.res.Response;

      var inputTitle = <HTMLInputElement>document.getElementById('title');
      inputTitle.value="";

      var inputYear = <HTMLInputElement>document.getElementById('year');
      inputYear.value="";
  });

  }
  ngOnInit(){
  }
}


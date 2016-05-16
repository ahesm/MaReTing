import { Component } from '@angular/core';
import {Router} from '@angular/router-deprecated';
import {Http, HTTP_PROVIDERS} from '@angular/http';

@Component({
    selector: 'record',
    templateUrl: 'app/record/record.html',
    styleUrls: ['app/record/record.css'],
    viewProviders: [HTTP_PROVIDERS]
})

export class RecordComponent {
    constructor(
        private router: Router,
        private http: Http
    ){}
    
    userData : UserData[] = [
      {
          'wind': '동',
          'id': '',
          'score': 0,
          'grade': 0,
      },
      {
          'wind': '남',
          'id': '',
          'score': 0,
          'grade': 0,
      },
      {
          'wind': '서',
          'id': '',
          'score': 0,
          'grade': 0,
      },
      {
          'wind': '북',
          'id': '',
          'score': 0,
          'grade': 0,
      } 
    ];
    userDataP : UserData[] = [
      {
          'wind': '동',
          'id': '',
          'score': 0,
          'grade': 0,
      },
      {
          'wind': '남',
          'id': '',
          'score': 0,
          'grade': 0,
      },
      {
          'wind': '서',
          'id': '',
          'score': 0,
          'grade': 0,
      },
      {
          'wind': '북',
          'id': '',
          'score': 0,
          'grade': 0,
      } 
    ];
    
    gongtak: number = 0;
    jang: string = 'ban';
    
    battleType = "일반전";
    
    rankgame = false;
    
    cloneData(){
        for(var attr in this.userData)
            this.userDataP[attr] = this.userData[attr];
    }
    
    onChange(event: Event){
        this.calGrade();
    }
    
    onClick(){
        this.battleType = this.battleType == "일반전" ? "랭크전" : "일반전";
        this.rankgame = !this.rankgame;
    }
    
    calGrade(){
        this.cloneData();
        this.userDataP.sort(function(a,b){
            return b.score-a.score;
        });
        for(var i=0;i<this.userDataP.length;i++) this.userDataP[i].grade = i+1;
    }
    
    getDif(){
        var sum = 0;
        for(var i=0;i<this.userDataP.length;i++) sum += +this.userData[i].score;
        return sum+ +this.gongtak;
    }
    
    Submit(){
        /*
         addHero() {

      let headers = new Headers();
    headers.append('Content-type', 'application/x-www-form-urlencoded');

    let formPayload = new URLSearchParams();
    formPayload.set('name', name);
    formPayload.set('description', description);

       this.http.post('http://127.0.0.1/heroWorld/public/heroes', formPayload.toString(), { headers: headers })
  .map((res:Response) => res.json())
  .subscribe(
        data => { this.heroes = data;
        },
        err => console.error(err),
        () => console.log('done');
      );
  }
         */
    }
}

class UserData {
    wind: string;
    id: string;
    score: number;
    grade: number;
}
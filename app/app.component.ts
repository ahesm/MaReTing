import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';

import {NoticeComponent} from './notice/notice.component';
import {RankingComponent} from './ranking/ranking.component';
import {RecordComponent} from './record/record.component';
import {SigninComponent} from './signin/signin.component';
import {ScoreComponent} from './score/score.component';

class Navi{
  data: string;
  route: string;
}

@RouteConfig([
  {
    path: '/notice',
    name: 'Notice',
    component: NoticeComponent

  },
  {
    path: '/ranking',
    name: 'Ranking',
    component: RankingComponent

  },
  {
    path: '/record',
    name: 'Record',
    component: RecordComponent,

  },
  {
    path: '/signin',
    name: 'Signin',
    component: SigninComponent

  },
  {
    path: '/score',
    name: 'Score',
    component: ScoreComponent
  }
])

@Component({
  selector: 'my-app',
  templateUrl:'app/app.html',
  styleUrls: ['app/app.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})

export class AppComponent{

}

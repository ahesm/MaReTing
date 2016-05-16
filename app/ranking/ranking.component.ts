import { Component } from '@angular/core';
import {Router} from '@angular/router-deprecated';

@Component({
    selector: 'ranking',
    templateUrl: 'app/ranking/ranking.html',
    styleUrls: ['app/ranking/ranking.css']
})

export class RankingComponent {
    constructor(
        private router: Router
    ){}
}
import { Component } from '@angular/core';
import {Router} from '@angular/router-deprecated';

@Component({
    selector: 'signin',
    templateUrl: 'app/score/score.html',
    styleUrls: ['app/score/score.css']
})

export class ScoreComponent {
    constructor(
        private router: Router
    ){}
}
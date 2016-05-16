import { Component } from '@angular/core';
import {Router} from '@angular/router-deprecated';

@Component({
    selector: 'signin',
    templateUrl: 'app/signin/signin.html',
    styleUrls: ['app/signin/signin.css']
})

export class SigninComponent {
    constructor(
        private router: Router
    ){}
}
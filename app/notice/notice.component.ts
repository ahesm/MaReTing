import { Component } from '@angular/core';
import {Router} from '@angular/router-deprecated';

@Component({
    selector: 'notice',
    templateUrl: 'app/notice/notice.html',
    styleUrls: ['app/notice/notice.css']
})

export class NoticeComponent {
    constructor(
        private router: Router
    ){}
}
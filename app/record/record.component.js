System.register(['@angular/core', '@angular/router-deprecated', '@angular/http'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_deprecated_1, http_1;
    var RecordComponent, UserData;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            RecordComponent = (function () {
                function RecordComponent(router, http) {
                    this.router = router;
                    this.http = http;
                    this.userData = [
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
                    this.userDataP = [
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
                    this.gongtak = 0;
                    this.jang = 'ban';
                    this.battleType = "일반전";
                    this.rankgame = false;
                }
                RecordComponent.prototype.cloneData = function () {
                    for (var attr in this.userData)
                        this.userDataP[attr] = this.userData[attr];
                };
                RecordComponent.prototype.onChange = function (event) {
                    this.calGrade();
                };
                RecordComponent.prototype.onClick = function () {
                    this.battleType = this.battleType == "일반전" ? "랭크전" : "일반전";
                    this.rankgame = !this.rankgame;
                };
                RecordComponent.prototype.calGrade = function () {
                    this.cloneData();
                    this.userDataP.sort(function (a, b) {
                        return b.score - a.score;
                    });
                    for (var i = 0; i < this.userDataP.length; i++)
                        this.userDataP[i].grade = i + 1;
                };
                RecordComponent.prototype.getDif = function () {
                    var sum = 0;
                    for (var i = 0; i < this.userDataP.length; i++)
                        sum += +this.userData[i].score;
                    return sum + +this.gongtak;
                };
                RecordComponent.prototype.Submit = function () {
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
                };
                RecordComponent = __decorate([
                    core_1.Component({
                        selector: 'record',
                        templateUrl: 'app/record/record.html',
                        styleUrls: ['app/record/record.css'],
                        viewProviders: [http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [router_deprecated_1.Router, http_1.Http])
                ], RecordComponent);
                return RecordComponent;
            }());
            exports_1("RecordComponent", RecordComponent);
            UserData = (function () {
                function UserData() {
                }
                return UserData;
            }());
        }
    }
});
//# sourceMappingURL=record.component.js.map
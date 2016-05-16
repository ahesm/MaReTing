System.register(['@angular/core', '@angular/router-deprecated', './notice/notice.component', './ranking/ranking.component', './record/record.component', './signin/signin.component', './score/score.component'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, notice_component_1, ranking_component_1, record_component_1, signin_component_1, score_component_1;
    var Navi, AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (notice_component_1_1) {
                notice_component_1 = notice_component_1_1;
            },
            function (ranking_component_1_1) {
                ranking_component_1 = ranking_component_1_1;
            },
            function (record_component_1_1) {
                record_component_1 = record_component_1_1;
            },
            function (signin_component_1_1) {
                signin_component_1 = signin_component_1_1;
            },
            function (score_component_1_1) {
                score_component_1 = score_component_1_1;
            }],
        execute: function() {
            Navi = (function () {
                function Navi() {
                }
                return Navi;
            }());
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    router_deprecated_1.RouteConfig([
                        {
                            path: '/notice',
                            name: 'Notice',
                            component: notice_component_1.NoticeComponent
                        },
                        {
                            path: '/ranking',
                            name: 'Ranking',
                            component: ranking_component_1.RankingComponent
                        },
                        {
                            path: '/record',
                            name: 'Record',
                            component: record_component_1.RecordComponent,
                        },
                        {
                            path: '/signin',
                            name: 'Signin',
                            component: signin_component_1.SigninComponent
                        },
                        {
                            path: '/score',
                            name: 'Score',
                            component: score_component_1.ScoreComponent
                        }
                    ]),
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/app.html',
                        styleUrls: ['app/app.css'],
                        directives: [router_deprecated_1.ROUTER_DIRECTIVES],
                        providers: [router_deprecated_1.ROUTER_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map
import {Component,ViewEncapsulation} from '@angular/core';
import {RouteConfig, Router} from '@angular/router-deprecated';

import {One} from './module.one';
import {AppState} from './app.service';
import {RouterActive} from './router-active';

export class Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'app',
  pipes: [ ],
  providers: [ ],
  directives: [ RouterActive ],
  encapsulation: ViewEncapsulation.None,
  template:`
    <h1>{{title}}</h1>
    <span>{{ name }}</span>
        <nav>
          <ul>
            <li router-active>
              <a [routerLink]=" ['Index'] ">Index</a>
            </li>
            |
            <li router-active>
              <a [routerLink]=" ['One'] ">One</a>
            </li>
            |
            <li router-active>
              <a [routerLink]=" ['Two'] ">Two</a>
            </li>
          </ul>
        </nav>
        
        <router-outlet></router-outlet>
    `
})

@RouteConfig([
  { path: '/',      name: 'Index', component: One },
  { path: '/one',  name: 'One',  component: One },
  // Async load a component using Webpack's require with es6-promise-loader and webpack `require`
  { path: '/two', name: 'Two', loader: () => require('es6-promise!./module.two')('Two'), useAsDefault: true }
])

export class App {
  title = 'Tour of Heroes';
  
  constructor(public appState: AppState) {
  }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }
}
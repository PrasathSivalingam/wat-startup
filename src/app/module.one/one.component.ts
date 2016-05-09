import {Component} from '@angular/core';
import {AppState} from '../app.service';
import {Inject} from '@angular/core';

 import {Sub} from './sub';
// import {XLarge} from './x-large';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'one',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    Sub
  ],
  // We need to tell Angular's compiler which directives are in our template.
  // Doing so will allow Angular to attach our behavior to an element
  directives: [
    //XLarge
  ],
  // We need to tell Angular's compiler which custom pipes are in our template.
  pipes: [ ],
  // Our list of styles in our component. We may add more to compose many styles together
  styles: [ require('./one.css') ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  template: require('./one.html')
})
export class One {
  // Set our default values
  localState = { value: '' };
  // TypeScript public modifiers
  constructor(public appState: AppState, public title: Sub) {

  }

  ngOnInit() {
    console.log('hello `Home` component');
    // this.title.getData().subscribe(data => this.data = data);
  }

  submitState(value:any) {
    console.log('submitState', value);
    this.appState.set('value', value);
  }

}
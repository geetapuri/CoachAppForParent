import { Component } from '@angular/core';

/**
 * Generated class for the Progress2Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'progress2',
  templateUrl: 'progress2.html'
})
export class Progress2Component {

  text: string;

  constructor() {
    console.log('Hello Progress2Component Component');
    this.text = 'Hello World';
  }

}

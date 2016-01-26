import { Component } from 'angular2/core';

@Component({
    selector: 'my-app',
    template: '{{welcome}}'
})
export class AppComponent {
    welcome: string = 'Hello from Angular2!';
}
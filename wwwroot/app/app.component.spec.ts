import { AppComponent } from './app.component';

describe('AppComponent', () =>{
    
    let appComponent: AppComponent;
    
    beforeEach(() => {
        appComponent = new AppComponent();
    });
    
    it('has the correct welcome message', () => {
        expect(appComponent.welcome).toEqual('Hello from Angular2!');
    });
});
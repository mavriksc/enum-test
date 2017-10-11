import { Component } from '@angular/core';

import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

enum States  {
  STATE_ONE,STATE_TWO,STATE_THREE
}

class IHaveStates {
  state: States;
 constructor(){}
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  sublist: States[]=[States.STATE_TWO, States.STATE_THREE];
  canICancel:boolean = false;

  constructor(private http: Http) {}

  getState(): Promise<IHaveStates> {
    return this.http.get('http://localhost:8080')
      .toPromise()
      .then(response => response.json() as IHaveStates)
      .catch();
  }

  stateTest(){
    let thing: IHaveStates = new IHaveStates();

    thing.state = States.STATE_THREE;
    let index = this.sublist.indexOf(thing.state);
    let statesICanCancel = index ===-1;
    console.log('State of the thing: '+thing.state);
    console.log('Enum value of State of the thing: '+States[thing.state]);     
    console.log('Sub list of can\'t cancel states: '+this.sublist);
    console.log('location cant cancel list: '+index);
    console.log('can i cancel: '+statesICanCancel);

    thing.state = States.STATE_ONE;
    index = this.sublist.indexOf(thing.state);
    statesICanCancel = index ===-1;
    console.log('State of the thing: '+thing.state);
    console.log('Enum value of State of the thing: '+States[thing.state]);     
    console.log('Sub list of can\'t cancel states: '+this.sublist);
    console.log('location cant cancel list: '+index);
    console.log('can i cancel: '+statesICanCancel);

    thing.state = States['STATE_ONE'];
    index = this.sublist.indexOf(thing.state);
    statesICanCancel = index ===-1;
    console.log('State of the thing: '+thing.state);
    console.log('Enum value of State of the thing: '+States[thing.state]);     
    console.log('Sub list of can\'t cancel states: '+this.sublist);
    console.log('location cant cancel list: '+index);
    console.log('can i cancel: '+statesICanCancel);

    thing = {state:0};//error trying to set with state:'STATE_ONE'
    index = this.sublist.indexOf(thing.state);
    statesICanCancel = index ===-1;
    console.log('State of the thing: '+thing.state);
    console.log('Enum value of State of the thing: '+States[thing.state]);     
    console.log('Sub list of can\'t cancel states: '+this.sublist);
    console.log('location cant cancel list: '+index);
    console.log('can i cancel: '+statesICanCancel);

  }
  canCancel(thing:IHaveStates):boolean{
    for (let state of this.sublist) {
      if (thing.state.toString() === States[state]) {
        return false;
      }
    }
    return true;
  }

  ngOnInit(){
    this.stateTest();
    this.getState().then(thing => { this.canICancel = this.canCancel(thing);
      this.title = thing.state +'<---- state  can cancel---->'+ this.canICancel;

      console.log('State of the thing: '+thing.state);
      console.log('Enum value of State of the thing: '+States[thing.state]);     
      console.log('Sub list of can\'t cancel states: '+this.sublist);

      console.log('New method can cancel: '+this.canICancel);


    });

  }


  
}

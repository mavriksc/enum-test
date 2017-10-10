import { Component } from '@angular/core';

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


  ngOnInit(){
    const sublist: States[]=[States.STATE_TWO, States.STATE_THREE ];
    let thing: IHaveStates = new IHaveStates();

    thing.state = States.STATE_THREE;
    let index = sublist.indexOf(thing.state);
    let statesICanCancel = index ===-1;
    console.log('location cant cancel list: '+index);

    console.log('can i cancel: '+statesICanCancel);
    console.log(thing.state);
    console.log(States[thing.state]);
    console.log(States[States[thing.state]]);

    thing.state = States.STATE_ONE;
    index = sublist.indexOf(thing.state);
    statesICanCancel = index ===-1;
    console.log('location cant cancel list: '+index);

    console.log('can i cancel: '+statesICanCancel);
    console.log(thing.state);
    console.log(States[thing.state]);
    console.log(States[States[thing.state]]);

    thing.state = States['STATE_ONE'];
    index = sublist.indexOf(thing.state);
    statesICanCancel = index ===-1;
    console.log('location cant cancel list: '+index);

    console.log('can i cancel: '+statesICanCancel);
    console.log(thing.state);
    console.log(States[thing.state]);
    console.log(States[States[thing.state]]);


  }
}

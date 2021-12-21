import React from 'react';
import { observer, inject } from 'mobx-react';


@inject('birdStore')
@observer
export default class App extends React.Component{

  handleSubmit = (e) => {
    e.preventDefault();
    const { birdStore } = this.props;
    birdStore.addBird(this.bird.value);
    this.bird.value = "";

  }
  render(){
    const { birdStore } = this.props;
    const { BirdCount, birds } = birdStore;
    return (
      <div className="App">
        <h1>Mobx React Demo</h1>
        <h2>Bird count is {BirdCount} </h2>
        <form onSubmit= {this.handleSubmit}> 
          <input type="text"  placeholder="Brid name" ref = { input => this.bird = input } />
          <button>Add Bird</button>
        </form>

        <ul>
          {
            birds.map( (bird, index) => <li key={bird+index}>{bird}</li>)
          }
        </ul>
      </div>
    );
  }
}

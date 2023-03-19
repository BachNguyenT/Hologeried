import { Component } from 'react';
import './App.css';
import example from './newexample.json';
import CardList from './components/card-list/Cardnew';

class App extends Component {
  constructor () {
    super();
    this.state = {
      watch: example
    };
  }
    


  render () {
    return (
      <div className='App'>
        <section className="cards-list">
          <CardList watches={example}/>
        </section>
      </div>
    );
  } 
}


export default App;

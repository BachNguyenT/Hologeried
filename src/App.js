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
    // const card = this.state.watch.map((model) => {
    //   return (
    //     <CardList 
    //       image = {model.watch.image}
    //       logo = {model.watch.brand.logo}
    //       brandname = {model.watch.brand.name}
    //       watchname = {model.watch.wb.name}
    //       ref = {model.watch.wb.reference_number}
    //       description = {model.watch.wb.description}
    //       />)
    // //console.log(this.state.watch);
    // });
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

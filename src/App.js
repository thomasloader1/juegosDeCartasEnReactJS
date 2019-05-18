import React, { Component } from 'react';

/* Mis componentes */
import Header from './Header';
import Tablero from './Tablero';

/* Utilidades */
import makeDeck from './util/makeDeck';

import './App.css';

const getEstadoInicial = () => {
  const deck = makeDeck();
  return({
    deck
  });
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = getEstadoInicial();
  }

  render (){
    return(
      <div className="App">
          <Header />
          
          <Tablero 
          deck ={ this.state.deck}
          />
      </div>
    );
  }

}

export default App;

import React, { Component } from 'react';
import Carta from './Carta';

import './Tablero.css';

export default class Tablero extends Component{
    render(){
        return(
            <div className="tablero">
                {
                    this.props.deck.map((carta) => <Carta icon={carta.icon}/> )
                }
            </div>
        );
    }
}
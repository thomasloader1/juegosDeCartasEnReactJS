import React, { Component } from 'react';
import './Carta.css';
import ReactCardFlip from 'react-card-flip';

export default class Carta extends Component{
    render(){
        return(
            <div className="carta">
            <ReactCardFlip>
                <div className="portada"></div>
                <div className="contenido">
                    <i className={`fa ${this.props.icon} fa-5x`}></i>
                </div>
            </ReactCardFlip>   
                
            </div>
        );
    }
}

import React from "react";
import './card.styles.css';
export const Card = props => (
    <div className='card-container'>
        <img alt="monsters" src={`https://robohash.org/${props.monster.id}?set=set4&size=180x180`} />
        <h2> {props.monster.name} </h2>
        <h2> {props.monster.email} </h2>
    </div>
)
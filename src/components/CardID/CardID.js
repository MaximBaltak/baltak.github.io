import React, {useState} from 'react';
import styles from './CardID.module.scss'

import {useParams} from "react-router-dom";

const CardId = ({list}) => {
    let params = useParams()
    let card = useState(list.filter(el => el.id === params.id)[0])
    console.log(card[0])
    return (
        <div className={styles.grid}>
            <div className={styles.description}>
                <img src={card[0].images.large} alt='pokemon'/>
                {card[0].attacks.map(el => <p> {el.text}</p>)}
            </div>
            <div className={styles.information}>

                <p>{card[0].name}</p>
                <p>{card[0].supertype}</p>
                <p>{card[0].types}</p>
                <p>{card[0].subtypes.map(el => <span> {el}</span>)}</p>
                <hr/>
                <p>{card[0].attacks.map(el => <span> {el.damage}</span>)}</p>
                <p>{card[0].attacks.map(el => <span> {el.cost}</span>)}</p>
                <p>не нашёл</p>
                <p>нету</p>

            </div>

        </div>
    );
};

export default CardId;

import React from 'react';
import styles from './Card.module.scss'

const Card = ({image, text, name}) => {


    return (
        <div className={styles.card}>
            <img src={image} alt='pokemon'/>
            <h2>{name}</h2>
            <p>{text || 'Нет описания'}</p>
        </div>
    );
};

export default Card;

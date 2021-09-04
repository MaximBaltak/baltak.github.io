import React from 'react';
import styles from './CardsHeader.module.scss'
import {useHistory} from "react-router-dom";

const CardsHeader = ({children}) => {
    let history = useHistory()
    let click=()=>{

          if(history.location.pathname==='/pokemon'){
              history.push('/')
          }else {
              history.push('/pokemon')
          }

    }
    return (
        <>
            <header className={styles.header}>
                <button onClick={click}>← Назад</button>
                <h1>Покемоны</h1>
            </header>
            <div className={styles.container}>{children}</div>
        </>
    );
};

export default CardsHeader;

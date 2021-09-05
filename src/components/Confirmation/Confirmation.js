import React, {useState} from 'react';
import styles from './../SignUp/SignUp.module.scss'
import arrow from './../../img/arrow.png'
import {useHistory} from "react-router-dom";

const Confirmation = ({prevPassword}) => {
    let history = useHistory()
    let [password, setPassword] = useState()
    let [stylePassword, setStylePassword] = useState('black')
    let click = () => {
        if (prevPassword !== password) {
           setStylePassword('red')

        } else {
            setStylePassword('black')
            history.push('/pokemon')
        }
    }
    return (
        <div className={styles.form}>
            <input style={{color:stylePassword,borderColor:stylePassword}} onChange={e => setPassword(e.target.value)} className={styles.input} type='password'
                   placeholder='Потвердите пороль' name='password'/>
            <button onClick={click} className={styles.button}><img width='41' height='50' src={arrow} alt="arrow"/>
            </button>
            {stylePassword === 'red' ? <p style={{color: stylePassword}}>Пороли не совпадают</p> : null }
        </div>
    );
};

export default Confirmation;

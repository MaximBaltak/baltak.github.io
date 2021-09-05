import React, {useState} from 'react';
import styles from './SignUp.module.scss'
import arrow from './../../img/arrow.png'
import {useHistory} from "react-router-dom";

const SignUp = ({login, password, changeLogin, changePassword}) => {
    let [styleLogin, setStyleLogin] = useState('black')
    let [stylePassword, setStylePassword] = useState('black')
    let history = useHistory()
    let click = () => {
        if (login === '' || password === '') {
            setStyleLogin('red')
            setStylePassword('red')
        } else {
            setStyleLogin('black')
            setStylePassword('black')
            if (!/^[$.+@]?([a-z])+[$.+@]?([a-z])+?$/i.test(login)) {
                    
            } else {
                if(!/[@.+$]+/i.test(login)) {
                    setStyleLogin('red')
                }else{
                    setStyleLogin('black')
                    setStylePassword('black')
                    if (!/^[\d\w]{8,}$/i.test(password)) {
                        setStylePassword('red')
                    } else {
                        setStyleLogin('black')
                        setStylePassword('black')
                        history.push('/confirmation')
                    }
                }       
            }
        }
    }

    return (
        <div className={styles.form}>
            <input style={{color: styleLogin, borderColor: styleLogin}} onChange={e => changeLogin(e.target.value)}
                   className={styles.input} type="text"
                   placeholder="Введите логин" name='login'/>
            <input style={{color: stylePassword, borderColor: stylePassword}}
                   onChange={e => changePassword(e.target.value)} className={styles.input} type="password"
                   placeholder="Введите пороль" name='password'/>
            <button onClick={click} className={styles.button} type="submit"><img width='41' height='50' src={arrow}
                                                                                 alt="arrow"/>
            </button>
            <p><span style={{color: styleLogin}}>логин должен состоять из латиницы, иметь хотя бы один из знаков $ . @ + ,и не должен быть пустым.</span><br/><br/><span
                style={{color: stylePassword}}>пороль должен состоять из 8 цифр и латинских букв и не должен быть пустым.</span>
            </p>
        </div>


    );
};

export default SignUp;

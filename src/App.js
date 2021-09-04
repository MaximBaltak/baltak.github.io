import './App.scss';
import {Route, Switch} from "react-router-dom";
import SignUp from "./components/SignUp/SignUp";
import Confirmation from "./components/Confirmation/Confirmation";
import CardsHeader from "./components/CardsHeader/CardsHeader";
import Cards from "./components/Cads/Cards";
import CardId from "./components/CardID/CardID";
import {useEffect, useState} from "react";

function App() {
    let [login, setLogin] = useState()
    let [password, setPassword] = useState()
    let changeLogin = (login) => {
        setLogin(login)
    }
    let changePassword = (password) => {
        setPassword(password)
    }
    let [list, setList] = useState([])
    let [types, setTypes] = useState([])
    let [subTypes, setSubTypes] = useState([])


    useEffect(() => {
        fetch('https://api.pokemontcg.io/v2/types')
            .then(res => res.json())
            .then(res => setTypes([...res.data]))
            .catch(err => console.log(err))
    }, [])
    useEffect(() => {
        fetch('https://api.pokemontcg.io/v2/subtypes')
            .then(res => res.json())
            .then(res => setSubTypes([...res.data]))
            .catch(err => console.log(err))
    }, [])
    useEffect(() => {
        fetch('https://api.pokemontcg.io/v2/cards')
            .then(res => res.json())
            .then(res => setList([...res.data]))
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            <Switch>
                <Route exact path='/'><SignUp
                    login={login}
                    password={password}
                    changeLogin={changeLogin}
                    changePassword={changePassword}/>
                </Route>
                <Route exact path='/confirmation'><Confirmation prevPassword={password}/></Route>
                <Route path='/pokemon'>
                    <CardsHeader>
                        <Route exact path='/pokemon'><Cards list={list} subTypes={subTypes} types={types}/></Route>
                        <Route path='/pokemon/:id'><CardId list={list}/></Route>
                    </CardsHeader>
                </Route>
            </Switch>

        </>
    );
}

export default App;

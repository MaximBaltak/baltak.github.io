import styles from './Cards.module.scss'
import Card from "./Card/Card";
import {NavLink} from "react-router-dom";
import {useEffect, useState} from "react";

const Cards = ({list, types, subTypes}) => {
    let [type, setType] = useState('allTypes')
    let [subType, setSubType] = useState('AllSubTypes')
    let [filterListTypeAndSubType, setFilterListTypeAndSubType] = useState([...list])


    useEffect(() => {
        let arr = []
        if (type === 'allTypes' && subType === 'AllSubTypes') {
            console.log(1)
            arr = [...list]
        } else if (type !== 'allTypes' && subType === 'AllSubTypes') {
            console.log(2)
            arr = [...list.filter(el => el.types[0] === type)]
        } else if (type === 'allTypes' && subType !== 'AllSubTypes') {
            console.log(3)
            arr = [...list.filter(el => el.subtypes[0] === subType)]
        } else if (type !== 'allTypes' && subType !== 'AllSubTypes') {
            console.log(4)
            arr = [...list.filter(el => el.types[0] === type)]
            arr = [...arr.filter(el => el.subtypes[0] === subType)]
        }
        console.log(5)
        if (arr !== []) {
            setFilterListTypeAndSubType([...arr])
        } else {
            setFilterListTypeAndSubType([...list])
        }


    }, [type, subType])
    console.log(filterListTypeAndSubType)
    return (
        <div className={styles.grid}>
            <div className={styles.selected}>
                <select onChange={e => setType(e.target.value)} defaultValue='allTypes' name="types">
                    <option value='allTypes'>allTypes</option>
                    {types.map(el => <option value={el}>{el}</option>)}
                </select>
                <select onChange={e => setSubType(e.target.value)} name="SubTypes" defaultValue='AllSubTypes'>
                    <option value='AllSubTypes'>AllSubTypes</option>
                    {subTypes.map(el => <option value={el}>{el}</option>)}
                </select>
            </div>
            <div className={styles.cards}>
                <ul>
                {filterListTypeAndSubType.map(el =><li key={el.id}> <NavLink to={`/pokemon/${el.id}`}><Card image={el.images.small}
                                                                                            name={el.name}
                                                                                  text={el.artist}/>
                </NavLink></li>)}
                </ul>
            </div>
        </div>
    );
};

export default Cards;

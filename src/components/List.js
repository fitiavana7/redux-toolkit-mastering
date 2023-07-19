import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deletePLayer, setPlayerData } from '../feature/videos.slice';
import './list.scss' ;

const List = (props) => {
    let dispatch = useDispatch() 

    let [valeur , setValeur] = useState('') 
    let [filtre , setFiltre] = useState('') 
    
    useEffect( ()=>{                                                            
        axios.get("http://localhost:5000/player")
        .then((res)=>{dispatch(setPlayerData(res.data))})
    },[])
    let player = useSelector(state=> state.player)


    function handleChange(e) {
        setValeur(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault() ;
    }

    function handleSelect(e) {
        setFiltre(e.target.value)
    }
    function handleRemove({id}) {
        console.log(id)
        axios.delete("http://localhost:5000/player/" + id ).then(
            dispatch(deletePLayer(id))
        )
    }

    return (
        <div className='list'>
            <form action="" onSubmit={handleSubmit}>
                <div className="list-control">
                    <div className="radio-groupe">
                        <input type="radio" onChange={handleSelect} name="filtre" value="" id="" />
                        <label htmlFor="all">All</label>
                    </div>
                    <div className="radio-groupe">
                        <input type="radio" onChange={handleSelect} name="filtre" value="Goalkeeper" id="gk" />
                        <label htmlFor="gk">Goalkeeper</label>
                    </div>
                    <div className="radio-groupe">
                        <input type="radio" onChange={handleSelect} name="filtre" value="Defender" id="df" />
                        <label htmlFor="df">Defender</label>
                    </div>
                    <div className="radio-groupe">
                        <input type="radio" onChange={handleSelect} name="filtre" value="Midfielder" id="md" />
                        <label htmlFor="md">Midfielder</label>
                    </div>
                    <div className="radio-groupe">
                        <input type="radio" onChange={handleSelect} name="filtre" value="Striker" id="st" />
                        <label htmlFor="st">Striker</label>
                    </div>
                </div>
                <div className="input-groupe">
                    <input value={valeur} placeholder="entrer le nom du joueur ..." onChange={handleChange} className='form-control' type="text" name="" id="" />
                    <button type="submit" className='btn btn-warning'><i className="fa fa-search"></i></button>
                </div>
            </form>
            <div className="list-container">
                <ul>
                {
                    player.filter((res)=>{return res.poste.includes(filtre)}).filter((data)=>{return data.name.toLowerCase().includes(valeur)}).map( (player) => {
                        return (
                            <li className='player-box' key={player.id}>
                                <i className='badge badge-warning'>{player.number}</i>
                                <h3>
                                    {player.name.toUpperCase()}
                                </h3>
                                <h4>{player.nationality}</h4>
                                <h4 className='position'>{player.poste}</h4>
                                <button onClick={()=>{handleRemove(player)}} ><i className='fa fa-remove'></i></button>
                            </li>
                        ) ;
                    })
                }
                
                </ul>
            </div>
        </div>        
    );
};

export default List;
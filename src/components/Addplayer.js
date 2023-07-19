import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPlayerData } from '../feature/videos.slice';

const AddPlayer = (props) => {
    let [nom , setNom] = useState("") ;
    let [numero , setNumero] = useState(0) ;
    let [pays , setPays] = useState("") ;
    let [poste , setPoste] = useState("") ;
    let [show , setShow] = useState(false) ;
    let dispatch = useDispatch()

    function handleChange(e) {
        switch (e.target.id) {
            case "nom":
                setNom(e.target.value)
                break;
            case "numero":
                setNumero(e.target.value)
                break;
            case "pays":
                setPays(e.target.value)
                break;
            case "poste":
                setPoste(e.target.value)
                break;
            default:
                break;
        }
    }
    function handleSubmit(e) {
        e.preventDefault()
        let etat = {
            number : numero.toLocaleString() ,
            name : nom , 
            nationality : pays , 
            poste : poste
        }
        console.log(etat)
        axios.post("http://localhost:5000/player" , etat)
        .then(()=>{
            dispatch(addPlayerData(etat)) 
        })
        setNom("") 
        setNumero(0) 
        setPays("") 
        setPoste("") 
        setShow(false)
    }
    function handleRemove() {
        setShow(!show)
    }
    function handleAdd() {
        setShow(!show)
    }

    return (<>
        <div className="afficher"><button onClick={handleAdd} className=' btn btn-success'><i className="fa fa-plus"></i></button></div>
        <div onClick={handleRemove} className={show  ? "add-container-show" : "add-container-none"}></div>
        <div className={show  ? "add-player-show" : "add-player-none"}>
                <form action="" onSubmit={handleSubmit}>
                    <div className="input-box">
                        <input onChange={handleChange} type="text" value={nom} className='form-control' name="" id="nom" placeholder='nom du joueur'/>
                    </div>
                    <div className="input-box">
                        <input onChange={handleChange} type="number" value={numero} className='form-control' name="" id="numero" placeholder='numero'/>
                    </div>
                    <div className="input-box">
                        <input onChange={handleChange} type="text" value={pays} className='form-control' name="" id="pays" placeholder='pays'/>
                    </div>
                    <div className="input-box">
                        <input onChange={handleChange} type="text" value={poste} className='form-control' name="" id="poste" placeholder='poste'/>
                    </div>
                    <div className="input-box">
                        <button className='btn btn-primary' type="submit"><i className="fa fa-send"></i>AJOUTER</button>
                    </div>
                </form>
            </div>
            </>
        );
};

export default AddPlayer;
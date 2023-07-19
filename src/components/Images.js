import React, { useState } from 'react';
import './images.scss' ;

const Images = (props) => {
    let [nom , setNom] = useState('') ,  [prenom , setPrenom] = useState('') ;
    let [data , setData] = useState([]) ;


    function handleChange(e) {
        e.target.id == "nom" ? setNom(e.target.value) : setPrenom(e.target.value) ;
    }
    function handleSubmit(e) {
        e.preventDefault()
        if (nom != '' && prenom !=''){
            let newData = [{ id : new Date , nom : nom , prenom : prenom}] 
            let nouveauData = [...data,...newData]
            setData(nouveauData)
            setNom("") ;
            setPrenom("") ;
        }
    }

    function handleDelete(e) {
        let newState = [...data] 
        let newState2 = newState.filter((user)=> {return user.id != e})
        setData(newState2) 
    }


   return (
        <div className='images'>
        <form action="" onSubmit={handleSubmit}>
            <div className="input-box">
                <input onChange={handleChange} value={nom} type="text" placeholder='nom' className='form-control' name="" id="nom" />
                <input onChange={handleChange} value={prenom} type="text"  placeholder='prenom' className='form-control' name="" id="prenom" />
                <button className='btn btn-warning' type="submit"><i className="fa fa-send"></i></button>
            </div>
        </form>
            <div className="mon-box">
                {data.map((user)=>{
                    return (
                        <h3 className='alert alert-primary' key={user.id}><span>{user.nom + ' ' + user.prenom}</span><button onClick={()=>{handleDelete(user.id)}} className="btn btn-danger"><i className="fa fa-remove"></i></button></h3>
                    ) ;
                })}
            </div>
        </div>
    );
};

export default Images;
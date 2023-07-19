import React, { useReducer, useState } from 'react';

function TodoReducer(state  ,action) {
    switch (action.type) {
        case "increment":
            return state + action.valeur ;
        case "decrement" : 
            if (state <1){
                return state;
            }else {
                return state - action.valeur ;
            }
        case "stop" : 
            return 0 ;
        default:
            return state ;
    }
}

const Exercice = (props) => {
    let [nombre , setNombre] = useState(0)
    let [valeur , setValeur] = useState(10)

    let [count , dispatch] = useReducer(TodoReducer , nombre) 

    function handleChange(e) {
        setValeur(parseInt(e.target.value))
    }

    return (
        <div>
            <div className="alert alert-warning">{count}</div>
            <button onClick={()=>{dispatch({type : "stop" , valeur : valeur})}} className='btn btn-warning'>
                <i className="fa fa-stop"></i>                
            </button>
            <button onClick={()=>{dispatch({type : "decrement", valeur : valeur})}} className='btn btn-danger'>
                <i className="fa fa-minus"></i>                
            </button> 
            <button onClick={()=>{dispatch({type : "increment", valeur : valeur})}} className='btn btn-primary'>
                <i className="fa fa-plus"></i>                
            </button> 
            <form action="">
                <input onChange={handleChange} type="number" className="form-control" value={valeur} />
            </form>            
        </div>
    );
};

export default Exercice;
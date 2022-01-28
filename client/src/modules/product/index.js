import React, { useState } from 'react'
import { getProductAll } from '../api'
import axios from 'axios'
import ProductList from './productList'



function GetUser (){
    const [prod, setProd] = useState()
    const [load, setLoad] = useState(false)

    const test = () =>{
        axios.get(`http://localhost:5003/api/products/`
        )
          .then((res) => setProd(res.data))
        setTimeout(() => {
          setLoad(true)
        }, 1000);
    }

    const mapProd = (u) =>{
        return <ProductList key={u.id} u={u}/>
    }
    
    return <>
        <button onClick={test}>Show User</button>
        <div>{!load? <div>Load...</div> : <div>{prod.map(mapProd)}</div>}</div>
    </>
}

export default GetUser



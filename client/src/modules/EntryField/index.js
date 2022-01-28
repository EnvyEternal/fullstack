import React, { useState } from 'react'
import axios from 'axios';
import ProductList from '../product/productList';

function Entry(){
    const [get, setGet] = useState()
    const [load, setLoad] = useState(false)
    const [data, setData] = useState({
        name: "",
        price: "",
        decription: ""
      });
    
      const handleChange = (e) => {
        const value = e.target.value;
        setData({
          ...data,
          [e.target.name]: value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const prodData = {
          name: data.name,
          price: data.price,
          decription: data.decription
        };
        setGet(prodData)
        axios.post("http://localhost:5003/api/products/", prodData).then((response) => {
          console.log(response.status);
        });
        setLoad(true)
      };
      /*
      const List = setTimeout(() =>{
        return get.name
      }, 7000)
     */
      return (
        <div>
          <h1>Add Product</h1>
          <form onSubmit={handleSubmit}>
            <label>
              Name
              <input
                type="text"
                name="name"
                value={data.name}
                onChange={handleChange}
              />
            </label>
            <label>
              Decription
              <input
                type="text"
                name="decription"
                value={data.decription}
                onChange={handleChange}
              />
            </label>
            <label>
              Price
              <input
                type="text"
                name="price"
                value={data.price}
                onChange={handleChange}
              />
            </label>
            <button type="submit">Login</button>
          </form>
          <div>{!load ? <div>Load...</div> : <li>Ok</li>}</div>
        </div>
      );
}

export default Entry
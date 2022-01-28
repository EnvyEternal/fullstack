import axios from 'axios';

export const getProduct = (params) =>
axios.get(`http://localhost:5003/api/products/${params}`
)
  .then(function (response) {
    return console.log(response.data);
  })

export const getProductAll = () =>
axios.get(`http://localhost:5003/api/products/`
        ).then(function(res){
          return res.data
        })
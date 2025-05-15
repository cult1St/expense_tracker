import React from 'react'

const Product = ({product, addToCart, index}) => {
  return (
    <div key={index} className="card col-12 col-sm-4 col-md-3 my-3">
    <img src={product.image} alt={product.title} width="300px" className="img-fluid" />
    <div className="card-body">
      <h5 className="card-title">{product.title}</h5>
      <p className="card-text">
      {product.description.slice(0, 100)}...
      <a href="#" >Read More</a>
      </p>
      </div>
    <p>
      Price: <b>&#8358; {product.price}</b>
    </p>
    <button onClick={() => {addToCart(product)}} className="btn btn-primary">ADD TO CART</button>
  </div>
  )
}

export default Product
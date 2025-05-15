import React from "react";
import Product from "./ecommerce/Product";
import CartTable from "./ecommerce/CartTable";

const Ecommerce = () => {
    const [loading, setLoading] = React.useState(true);
    const [products, setProducts] = React.useState([]);
    const [cart, setCart] = React.useState([]);


    const addToCart = (product) => {
        const exist = cart.find((item) => item.id === product.id);
        if (exist) {
            setCart(cart.map((item) => item.id === product.id ? { ...exist, qty: exist.qty + 1 } : item));
        } else {
            setCart([...cart, { ...product, qty: 1 }]);
        }
        alert("Product added to cart");
    }

    React.useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setProducts(data);
            setLoading(false);
        })
        .catch((error) => {
            alert("An Error Occurred: "+ error)
        })
    }, []);
  return (
    <div className="container-fluid">
      {/* Navigation Start */}
      <nav className="navbar navbar-expand-lg bg-primary text-white">
        <div className="container-fluid column-gap-5">
          <a href="#" className="navbar-brand mx-2">Africa Foundation</a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-md-center justify-content-lg-end" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
              <li className="nav-item">
                <a className="nav-link active" href="index.html">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="aboutus.html">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="programs.html">
                  Programs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="news.html">
                  News
                </a>
              </li>
              <li className="nav-item">
              <div className="dropdown">
  <button
    className="btn btn-secondary dropdown-toggle"
    type="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
   Cart <span>{cart.length}</span>
  </button>
  <div className="dropdown-menu">
    {cart.length > 0 ? (
        <CartTable cart={cart} />
        
    ) : (
        <div className="dropdown-item">No items in cart</div>
    )}
            <a href="paystack"  className='dropdown-item'>Check Out</a>
  </div>
</div>

              </li>
              <li className="nav-item">
                <a className="nav-link active" href="contact-us.html">
                  Contact Us
                </a>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
      {/* Navigation End */}

    <div className="row justify-content-center mb-3">
        <div className="col-md-12">
            <h2 className="text-center">Ecomerce Webpage</h2>
        </div>
        <div className="col-md-8">
        <div className="row">
       {
        loading ? <div className="text-center">
        <div
          className="spinner-border"
          style={{ width: "3rem", height: "3rem" }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
        <div
          className="spinner-grow"
          style={{ width: "3rem", height: "3rem" }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
       : products.map((product, index) => (<Product index={index} addToCart={addToCart} product={product} />))
       }
      </div>
        </div>

    </div>
      
    </div>
  );
};

export default Ecommerce;
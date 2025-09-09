import React, { useEffect, useState } from "react";
import Header from "../Shared/Header";
import Footer from "../Shared/Footer";
import axios from "axios";

function ProductList() {
  let [products, setProducts] = useState([]);

  useEffect(() => {
    getProductList();
  }, []);

  async function getProductList() {
    let apiResponse = await axios.get("https://dummyjson.com/products");
    let data = apiResponse.data.products.map((product) => {
      product.is_fav = false;
      return product;
    });
    //setProducts(apiResponse.data.products);
    setProducts(data);
    //console.log(apiResponse.data.products);
  }

  function handleFavorite(data) {
    let tempData = products.map((product) => {
      if (product.id === data.id) {
        if (data.is_fav === false) {
          product.is_fav = true;
        } else {
          product.is_fav = false;
        }
      }
      return product;
    });
    setProducts(tempData);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Header />
        </div>
      </div>

      <div className="row mt-5 mb-5">
        {products.map((product) => (
          <div className="col-3" key={product.id}>
            <div className="card shadow">
              <img
                src={product.thumbnail}
                className="card-img-top"
                width="150px"
                alt={product.title}
              />
              <div className="card-body">
                <h3 className="card-title">{product.title}</h3>
                <p className="card-text">{product.description}</p>
              </div>
              <div className="card-footer">
                <button
                  className="btn btn-primary"
                  onClick={(e) => handleFavorite(product)}
                >
                  <i className="bi bi-heart"></i>
                  {product.is_fav === true && <span>Remove</span>}
                  {product.is_fav === false && <span>Add</span>}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="row">
        <Footer />
      </div>
    </div>
  );
}

export default ProductList;

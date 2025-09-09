import React from "react";
import Header from "../Shared/Header";
import Footer from "../Shared/Footer";

function List() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Header />
        </div>

        <div className="col-12">
          <h1>Demand course</h1>
        </div>

        <div className="col-12">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default List;

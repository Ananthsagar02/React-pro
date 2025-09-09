import React from "react";
import Footer from "../Shared/Footer";
import Header from "../Shared/Header";
import TalkToUsForm from "./TalkToUsForm";

function Home() {
  var Headermsg = "From Header Component";
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-12">
          <Header message={Headermsg} />
        </div>

        <div className="col-6 p-5">
          <h2>Coding is ......</h2>
        </div>

        <div className="col-6 p-5">
          <h2>
            <TalkToUsForm message={Headermsg} />
          </h2>
        </div>

        <div className="col-12 mt-5">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;

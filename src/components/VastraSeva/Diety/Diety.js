import React, { useState } from "react";
import { useParams } from "react-router-dom";
import HomeHeader from "../../Headers/HomeHeader";
import Footer from "../../Footer";
import Calendar from "./Calendar";
import AddToCart from "./AddToCart";
import Colors from "./Colors.js";
import { Col } from "react-bootstrap";

const Diety = () => {
  const { deity_name } = useParams();
  console.log(deity_name);
  const [data, setData] = useState(0);

  const load = () => {
    setData(data + 1);
  };

  return (
    <div>
      <HomeHeader />
      <div className="container">
        <div className="row mt-3 ">
          <div className="col-4" style={{ marginLeft: "20px" }}>
            <Colors />
          </div>
        </div>

        <div className="row mt-1">
          <div
            className="col-7 border  shadow-sm ml-3"
            style={{ marginLeft: "20px" }}
          >
            <Calendar load={load} />
          </div>

          <div className="col-3" style={{ marginLeft: "40px" }}>
            <AddToCart deity_name={deity_name} data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Diety;

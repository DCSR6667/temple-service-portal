import css from "./css/AddToCart.module.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AddToCart = (props) => {
  var [cartItems_hash123, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems_hash123")) || []
  );

  console.log(cartItems_hash123);

  var booked_dates = { deity: props.deity_name, cartItems_hash123 };

  useEffect(() => {
    setCartItems(JSON.parse(localStorage.getItem("cartItems_hash123")) || []);
  }, [props.data]);

  const calculateTotalPrice = (cartItems_hash123) => {
    var total = 0;
    for (var item of cartItems_hash123) {
      total = total + item.price;
    }
    return total;
  };

  const deleteItem = ({ day, month, year }) => {
    var updatedCartItems;

    updatedCartItems = cartItems_hash123.filter((item) => {
      if (item.day === day && item.month === month && item.year === year) {
        return false;
      } else {
        return true;
      }
    });

    localStorage.removeItem("cartItems_hash123");
    localStorage.setItem("cartItems_hash123", JSON.stringify(updatedCartItems));
    setCartItems(updatedCartItems);
  };

  return (
    <div className="container">
      <div className={"row border shadow-sm p-2 mt-3  " + css["heading"]}>
        <span>{props.deity_name} Vastra Seva</span>
      </div>

      {cartItems_hash123.map((item) => {
        return (
          <div className="row border shadow-sm p-2 mt-2">
            <div className={"col-5  " + css["subheading"]}>{`${
              item.month + 1
            }/${item.day}/${item.year}`}</div>

            <div className={"col-3  " + css["subheading"]}>{item.price}$</div>

            <div className="col-3">
              <button
                onClick={() => {
                  deleteItem(item);
                }}
                className="btn btn-sm btn-danger"
              >
                delete
              </button>
            </div>
          </div>
        );
      })}

      <div className="row border shadow-sm  p-2 mt-2 justify-content-end">
        <div className={"col-8  " + css["price"]}>
          Total Price: ${calculateTotalPrice(cartItems_hash123)}
        </div>
      </div>

      <div className="row  p-2 mt-2 justify-content-end">
        <div className={"col-4"}>
          <Link
            className={css["link"] + " btn btn-lg btn-primary"}
            to={`/user_info/${encodeURIComponent(
              JSON.stringify(booked_dates)
            )}`}
          >
            Next
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;

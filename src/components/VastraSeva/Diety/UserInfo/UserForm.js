import React from "react";
import css from "./css/UserForm.module.css";
import { useNavigate } from "react-router-dom";
const UserForm = ({ parseddata }) => {
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = {};

    formData.forEach((value, key) => {
      data[key] = value;
    });
    data["selected_deity"] = parseddata.deity;
    data["booked_dates"] = parseddata.cartItems_hash123;

    navigate(`/vastraseva_payment/${encodeURIComponent(JSON.stringify(data))}`);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-6 mt-4">
          <form onSubmit={submitHandler}>
            <div className="row border shadow-sm p-3 mt-3">
              <h2>User Info Request Form</h2>
            </div>

            <div className="row border shadow-sm p-3 mt-3">
              <div className={"col-12 mt-2 " + css["title"]}>
                Your First Name <span className={css["span"]}>*</span>
              </div>

              <div className="col-12 mt-2">
                <input
                  className={css["input"]}
                  required
                  type="text"
                  id="fname"
                  name="first_name"
                />
              </div>
            </div>

            <div className="row border shadow-sm p-3 mt-3">
              <div className={"col-12 mt-2 " + css["title"]}>
                Your Last Name <span className={css["span"]}>*</span>
              </div>

              <div className="col-12 mt-2">
                <input
                  className={css["input"]}
                  required
                  type="text"
                  id="fname"
                  name="last_name"
                />
              </div>
            </div>

            <div className="row border shadow-sm p-3 mt-3">
              <div className={"col-12 mt-2 " + css["title"]}>
                Please provide your contact phone number{" "}
                <span className={css["span"]}>*</span>
              </div>

              <div className="col-12 mt-2">
                <input
                  className={css["input"]}
                  required
                  type="tel"
                  id="phone"
                  name="phone_number"
                  pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                />
              </div>
            </div>

            <div className="row border shadow-sm p-3 mt-3">
              <div className={"col-12 mt-2 " + css["title"]}>
                Email Address
                <span className={css["span"]}> *</span>
              </div>

              <div className="col-12 mt-2">
                <input
                  className={css["input"]}
                  required
                  type="email"
                  id="email"
                  name="email"
                />
              </div>
            </div>

            <div className="row border shadow-sm p-3 mt-3">
              <div className={"col-12 mt-2 " + css["title"]}>Your Murutham</div>

              <div className="col-12 mt-2">
                <input
                  className={css["input"]}
                  type="text"
                  id="fname"
                  name="muhurtham"
                />
              </div>
            </div>

            <div className="row border shadow-sm p-3 mt-3">
              <div className="col-12 mt-2">
                <input
                  className={css["input"] + " " + css["submit"]}
                  type="submit"
                  value="Payment"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserForm;

import React from "react";
import css from "./css/SevaForm.module.css";
import { useNavigate } from "react-router-dom";

const SevaForm = (props) => {
  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = {};

    formData.forEach((value, key) => {
      data[key] = value;
    });

    navigate(`/seva_payment/${encodeURIComponent(JSON.stringify(data))}`);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-6 mt-4">
          <form onSubmit={submitHandler}>
            <div className="row border shadow-sm p-3 mt-3">
              <h2>Seva Booking Request Form</h2>
            </div>

            <div className="row border shadow-sm p-3 mt-3">
              <div className={"col-12 mt-2 " + css["title"]}>
                Location of Pooja <span className={css["span"]}>*</span>
              </div>

              <div className="col-12 mt-2">
                <input
                  type="radio"
                  required
                  id="html"
                  name="location_of_pooja"
                  value="In the Temple"
                />
                <label className={css["label"]}>In the Temple</label>
                <br />
              </div>

              <div className="col-12 mt-2">
                <input
                  type="radio"
                  required
                  id="html"
                  name="location_of_pooja"
                  value="At Home"
                />
                <label className={css["label"]}>At Home</label>
                <br />
              </div>
            </div>

            <div className="row border shadow-sm p-3 mt-3">
              <div className={"col-12 mt-2 " + css["title"]}>
                Type of Pooja/Service requested
                <br />
                (Please select from the list){" "}
                <span className={css["span"]}>*</span>
              </div>

              <div className={"col-12 mt-2"}>
                <select
                  className={css["select"]}
                  required
                  name="type_of_pooja"
                  id=""
                >
                  <option value="volvo">
                    Volvo fdadfg dkgnearg erknhbearhber rebhaertnh rkbar tkn
                    rtbhakrtn
                  </option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                </select>
              </div>
            </div>

            <div className="row border shadow-sm p-3 mt-3">
              <div className={"col-12 mt-2 " + css["title"]}>
                If you have selected OTHER Pooja, please specify the details of
                the Pooja being requested{" "}
              </div>

              <div className="col-12 mt-2">
                <input
                  className={css["input"]}
                  type="text"
                  id="fname"
                  name="details_of_pooja"
                />
              </div>
            </div>

            <div className="row border shadow-sm p-3 mt-3">
              <div className={"col-12 mt-2 " + css["title"]}>
                Priest Preference (If your preferred priest is unavailable,
                Temple administration will suggest alternate priest)
                <span className={css["span"]}>*</span>
              </div>

              <div className="col-12 mt-2">
                <input
                  type="radio"
                  required
                  id="html"
                  name="priest_preference"
                  value="Pt. Srinivas Sarama"
                />
                <label className={css["label"]}>Pt. Srinivas Sarama</label>
                <br />
              </div>

              <div className="col-12 mt-2">
                <input
                  type="radio"
                  required
                  id="html"
                  name="priest_preference"
                  value="Pt. Ghanashyam Sharma"
                />
                <label className={css["label"]}>Pt. Ghanashyam Sharma</label>
                <br />
              </div>

              <div className="col-12 mt-2">
                <input
                  type="radio"
                  required
                  id="html"
                  name="priest_preference"
                  value="No preference"
                />
                <label className={css["label"]}>No preference</label>
                <br />
              </div>
            </div>

            <div className="row border shadow-sm p-3 mt-3">
              <div className={"col-12 mt-2 " + css["title"]}>
                Do you want the priest to suggest Muhurat? *{" "}
                <span className={css["span"]}>*</span>
              </div>

              <div className="col-12 mt-2">
                <input
                  type="radio"
                  required
                  id="html"
                  name="suggest_muhurat"
                  value="Yes"
                />
                <label className={css["label"]}>Yes</label>
                <br />
              </div>

              <div className="col-12 mt-2">
                <input
                  type="radio"
                  required
                  id="html"
                  name="suggest_muhurat"
                  value="No"
                />
                <label className={css["label"]}>No</label>
                <br />
              </div>
            </div>

            <div className="row border shadow-sm p-3 mt-3">
              <div className={"col-12 mt-2 " + css["title"]}>
                If Muhurat is required, Please provide Name(s) and Birth
                Nakshra(s){" "}
              </div>

              <div className="col-12 mt-2">
                <input
                  className={css["input"]}
                  placeholder="Your answer"
                  type="text"
                  id="fname"
                  name="name_and_birth_nakshra"
                />
              </div>
            </div>

            <div className="row border shadow-sm p-3 mt-3">
              <div className={"col-12 mt-2 " + css["title"]}>
                Please indicate the date for the service being requested (If
                Muhurat is to be suggested by the priest then select a date
                around which you want the puja to be performed){" "}
                <span className={css["span"]}>*</span>
              </div>

              <div className="col-12 mt-2">Date</div>
              <div className="col-12 mt-2">
                <input
                  type="date"
                  required
                  id="birthday"
                  name="date_of_pooja"
                />
              </div>
            </div>

            <div className="row border shadow-sm p-3 mt-3">
              <div className={"col-12 mt-2 " + css["title"]}>
                Time Window for the Pooja (Skip this field if selected for
                priest to set the Muhurat){" "}
              </div>

              <div className="col-12 mt-2">Time</div>
              <div className="col-12 mt-2">
                <input type="time" id="appt" name="time_window_for_the_pooja" />
              </div>
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
              <div className={"col-12 mt-2 " + css["title"]}>
                If you are requesting service at a venue, please provide the
                venue's address. (Along with ZIP code)
                <span className={css["span"]}> *</span>
              </div>

              <div className="col-12 mt-2">
                <input
                  className={css["input"]}
                  type="text"
                  id="address"
                  name="address"
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

export default SevaForm;

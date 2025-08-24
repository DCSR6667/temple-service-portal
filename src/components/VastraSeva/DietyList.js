import React from "react";
import css from "./css/DietyList.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faOm } from "@fortawesome/free-solid-svg-icons";

const DietyList = (props) => {
  return (
    <div>
      <div className="container p-2">
        <div className="row mt-2  p-2 justify-content-center ">
          <div className="col-7  ">
            <div className={css["title1"]}>
              <span className={css["icon"]}>
                <FontAwesomeIcon icon={faOm} title="Om" />
              </span>{" "}
              Welcome, devotee! Please choose the deity for whom you wish to
              offer vastra seva
            </div>
          </div>
        </div>

        <div className="row mt-2 justify-content-center">
          <div
            className={"col-7 p-4  rounded shadow " + css["diety_names_col"]}
          >
            <div className="row mt-1  justify-content-around">
              {props.data.map((coll) => {
                return (
                  <div
                    className={"col-5 p-2  rounded " + css["diety_name_col"]}
                  >
                    <Link
                      className={css["diety_name_link"]}
                      to={"/diety/" + coll.name}
                    >
                      <div>{coll.name}</div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DietyList;

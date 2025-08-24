import css from "./css/OnlineServices.module.css";
import { Link } from "react-router-dom";

const OnlineServices = () => {
  return (
    <div className="container mt-3 border shadow-sm p-2 pb-5">
      <div className="row p-3 justify-content-center">
        <div className={"col-3 " + css["online"]}>Online Services</div>
      </div>

      <div className="row">
        {/* First Column */}
        <div
          className="col-3 shadow-sm  border"
          style={{ marginLeft: "70px", padding: "20px" }}
        >
          <div className="row  justify-content-center">
            <div className={"col-6 " + css["col-heading"]}>Vastra Seva</div>
          </div>

          <div className="row p-1">
            <div className="col-12 mt-2">
              <img
                className={css["img"] + " rounded"}
                src="/images/vastra_seva.jpg"
                alt="dummy-img"
              />
            </div>

            <div className="col-12 mt-3">
              it is a practice of providing clothing and garments to the deity.
              It can be part of daily worship or special festivals, where the
              deity is adorned in vibrant clothing, often accompanied by
              accessories and jewelry.
            </div>

            <div className="row justify-content-center">
              <div className="col-5 mt-2">
                <Link className={css["link"]} to="/vastra_seva">
                  <div className={css["reserve"] + " rounded"}>Reserve</div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Second Column */}
        <div
          className="col-3 shadow-sm border"
          style={{ marginLeft: "70px", padding: "20px" }}
        >
          <div className="row justify-content-center">
            <div className={"col-6 " + css["col-heading"]}>Seva</div>
          </div>

          <div className="row p-1">
            <div className="col-12 mt-2">
              <img
                className={css["img"] + " rounded"}
                src="/images/seva.JPG"
                alt="dummy-img"
              />
            </div>

            <div className="col-12 mt-3">
              it is a practice of reserving services related to worship,
              rituals, or volunteer work at the temple. This can include
              scheduling specific puja ceremonies, arranging for darshan or
              community service within the temple.
            </div>

            <div className="row justify-content-center">
              <div className="col-5 mt-2">
                <Link className={css["link"]} to="/seva">
                  <div className={css["reserve"] + " rounded"}>Reserve</div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Third Column */}
        <div
          className="col-3 shadow-sm  border"
          style={{ marginLeft: "70px", padding: "20px" }}
        >
          <div className="row justify-content-center">
            <div className={"col-6 " + css["col-heading"]}>AI Call</div>
          </div>

          <div className="row p-1">
            <div className="col-12 mt-2">
              <img
                className={css["img"] + " rounded"}
                src="/images/robo.jpg"
                alt="dummy-img"
              />
            </div>

            <div className="col-12 mt-3">
              Al call handler can provide various functionalities to improve
              communication and support for visitors and devotees. It is a 24/7
              Assistance ensuring that users can get help anytime regarding the
              temple.
            </div>

            <div className="row justify-content-center">
              <div className="col-5 mt-2">
                <Link className={css["link"]} to="/ai">
                  <div className={css["reserve"] + " rounded"}>Reserve</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineServices;

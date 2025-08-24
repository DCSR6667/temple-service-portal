import css from "./css/Colors.module.css";
const Colors = () => {
  return (
    <div className={css["legend"]}>
      <div className={css["legend-item"]}>
        <div
          className={css["color-box"]}
          style={{ backgroundColor: "red" }}
        ></div>
        <span className={css["span"]}>Booked Slot</span>
      </div>
      <div className={css["legend-item"]}>
        <div
          className={css["color-box"]}
          style={{ backgroundColor: "orange" }}
        ></div>
        <span className={css["span"]}>Special Day</span>
      </div>
    </div>
  );
};

export default Colors;

import React, { useState, useEffect } from "react";
import css from "./css/Calendar.module.css";
import { url } from "../../utils/url";

const Calendar = (props) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [festivals, setFestivals] = useState([]);
  const [vastraseva_bookings, setVastaSevaBookings] = useState([]);

  useEffect(() => {
    fetch(url + "/get_dates", {
      method: "GET", // You can specify the method
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setFestivals(data.festivals);
        setVastaSevaBookings(data.vastraseva_bookings);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const isthere = (day, festival_days) => {
    var i = 0;
    while (i < festival_days.length) {
      if (Number(festival_days[i]) === day) {
        return true;
      }
      i += 1;
    }
    return false;
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();
  const daysInMonth = getDaysInMonth(month, year);
  const firstDay = getFirstDayOfMonth(month, year);

  const days = [];
  for (let i = 0; i < firstDay; i++) {
    days.push(<div key={`empty-${i}`} className={css["day"]}></div>);
  }

  var monthname = monthNames[month];

  //filtering the festivals array and generating festival days

  var single_doc = festivals.filter((document) => {
    if (
      document.month.toLowerCase() === monthname.toLowerCase() &&
      Number(document.year) === year
    ) {
      return true;
    } else {
      return false;
    }
  })[0];

  var festival_days = [];
  // it contains particular month festival days
  if (single_doc !== undefined) {
    for (let doc of single_doc["festivals"]) {
      festival_days.push(doc.date);
    }
  }

  //filtering the vastraseva_bookings and generating the booking_days
  // it contains particular month booking days
  var booking_days = [];

  if (vastraseva_bookings.length !== 0) {
    for (let doc of vastraseva_bookings) {
      for (let semi_doc of doc["booked_dates"]) {
        if (
          semi_doc.month.toLowerCase() === monthname.toLowerCase() &&
          Number(semi_doc.year) === year
        ) {
          booking_days.push(semi_doc.date);
        }
      }
    }
  }

  var count_festival_days = (cartItems_hash123) => {
    var count = 0;
    for (var { isfestival } of cartItems_hash123) {
      if (isfestival === true) {
        count += 1;
      }
    }
    return count;
  };

  const clickOnDate = (day, month, monthname, year) => {
    if (!isthere(day, booking_days)) {
      var cal_price_fest = isthere(day, festival_days)
        ? [30, true]
        : [20, false];
      var obj = {
        day,
        month,
        monthname,
        year,
        price: cal_price_fest[0],
        isfestival: cal_price_fest[1],
      };

      var cartItems_hash123 = JSON.parse(
        localStorage.getItem("cartItems_hash123")
      );

      if (cartItems_hash123 == null) {
        localStorage.setItem("cartItems_hash123", JSON.stringify([obj]));
        props.load();
      } else {
        var flag = 0;
        for (var item of cartItems_hash123) {
          if (
            item.day === obj.day &&
            item.month === obj.month &&
            item.year === obj.year
          ) {
            flag = 1;
            break;
          }
        }
        if (flag === 0) {
          var countfestivaldays = count_festival_days(cartItems_hash123);

          if (cartItems_hash123.length <= 3) {
            if (countfestivaldays >= 1) {
              if (obj.isfestival !== true) {
                var new_array = [...cartItems_hash123, obj];
                localStorage.removeItem("cartItems_hash123");
                localStorage.setItem(
                  "cartItems_hash123",
                  JSON.stringify(new_array)
                );
                props.load();
              }
            } else {
              new_array = [...cartItems_hash123, obj];
              localStorage.removeItem("cartItems_hash123");
              localStorage.setItem(
                "cartItems_hash123",
                JSON.stringify(new_array)
              );
              props.load();
            }
          }
        }
      }
    }
  };

  for (let day = 1; day <= daysInMonth; day++) {
    if (isthere(day, festival_days) && isthere(day, booking_days)) {
      days.push(
        <div
          onClick={() => {
            clickOnDate(day, month, monthname, year);
          }}
          key={day}
          className={css["day"]}
          style={{ backgroundColor: "red" }}
        >
          {day}
        </div>
      );
    } else if (isthere(day, festival_days)) {
      days.push(
        <div
          onClick={() => {
            clickOnDate(day, month, monthname, year);
          }}
          key={day}
          className={css["day"]}
          style={{ backgroundColor: "orange" }}
        >
          {day}
        </div>
      );
    } else if (isthere(day, booking_days)) {
      days.push(
        <div
          onClick={() => {
            clickOnDate(day, month, monthname, year);
          }}
          key={day}
          className={css["day"]}
          style={{ backgroundColor: "red" }}
        >
          {day}
        </div>
      );
    } else {
      days.push(
        <div
          onClick={() => {
            clickOnDate(day, month, monthname, year);
          }}
          key={day}
          className={css["day"]}
        >
          {day}
        </div>
      );
    }
  }

  return (
    <div className={css["calendar"]}>
      <div className={css["calendar-header"]}>
        <button className={css["btn"]} onClick={handlePrevMonth}>
          Prev
        </button>
        <h2>
          {monthNames[month]} {year}
        </h2>
        <button className={css["btn"]} onClick={handleNextMonth}>
          Next
        </button>
      </div>
      <div className={css["weekdays"]}>
        <div className={css["weekday"]}>Sun</div>
        <div className={css["weekday"]}>Mon</div>
        <div className={css["weekday"]}>Tue</div>
        <div className={css["weekday"]}>Wed</div>
        <div className={css["weekday"]}>Thu</div>
        <div className={css["weekday"]}>Fri</div>
        <div className={css["weekday"]}>Sat</div>
      </div>
      <div className={css["days"]}>{days}</div>
    </div>
  );
};

export default Calendar;

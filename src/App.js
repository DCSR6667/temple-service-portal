import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home.js";
import Diety from "./components/VastraSeva/Diety/Diety.js";
import VastraSeva from "./components/VastraSeva/VastraSeva.js";
import BookingDetails from "./components/BookingDetails";
import Seva from "./components/Seva/Seva.js";
import Payment from "./components/Seva/Payment/Payment.js";
import AboutUs from "./components/AboutUs/AboutUs.js";
import ContactUs from "./components/ContactUs/ContactUs.js";
import Ai from "./components/Ai/Ai.js";
import UserInfo from "./components/VastraSeva/Diety/UserInfo/UserInfo.js";
import VastraSevaPayment from "./components/VastraSeva/Diety/UserInfo/Payment/VastraSevaPayment.js";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/vastra_seva" exact element={<VastraSeva />} />
      <Route path="/about_us" exact element={<AboutUs />} />
      <Route path="/contact_us" exact element={<ContactUs />} />
      <Route path="/seva" exact element={<Seva />} />
      <Route path="/ai" exact element={<Ai />} />
      <Route path="/seva_payment/:data" exact element={<Payment />} />
      <Route
        path="/vastraseva_payment/:data"
        exact
        element={<VastraSevaPayment />}
      />
      <Route path="/diety/:deity_name" exact element={<Diety />} />
      <Route path="/user_info/:booked_dates" exact element={<UserInfo />} />
      <Route path="/booking_details" exact element={<BookingDetails />} />
    </Routes>
  );
};

export default App;

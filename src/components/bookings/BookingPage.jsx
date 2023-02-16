import React, { useEffect, useReducer, useState } from "react";
import { useNavigate } from "react-router";
import BookingForm from "./BookingForm";

const updateTimes = (availableTimes, date) => {
  return window["fetchAPI"](date);
};

const initializeTimes = () => {
  return window["fetchAPI"](new Date());
};

export default function BookingPage(props) {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  const [bookingSuccessfull, setBookingSuccessfull] = useState(false);
  const navigate = useNavigate();

  function submitForm(data) {
    if (window["submitAPI"](data)) {
      setBookingSuccessfull(true);
    }
  }

  useEffect(() => {
    if (bookingSuccessfull) {
      navigate("/confirmedBooking");
    }
  }, [bookingSuccessfull]);

  return (
    <BookingForm
      availableTimes={availableTimes}
      dispatch={dispatch}
      submitForm={submitForm}
    />
  );
}

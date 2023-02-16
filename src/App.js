import Header from "./components/global/Header";
import Home from "./components/Home";
import BookingPage from "./components/bookings/BookingPage";
import { Routes, Route } from "react-router-dom";
import ConfirmedBooking from "./components/bookings/ConfirmedBooking";
import SideMenu from "./components/SideMenu";
import * as React from "react";

function App() {
  const [state, setState] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };

  return (
    <>
      <SideMenu state={state} toggleDrawer={toggleDrawer} />
      <Header toggleDrawer={toggleDrawer} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reservations" element={<BookingPage />} />
          <Route path="/confirmedBooking" element={<ConfirmedBooking />} />
        </Routes>
      </main>
    </>
  );
}

export default App;

import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import BookingForm from "./components/bookings/BookingForm";
import BookingPage from "./components/bookings/BookingPage";
import "@testing-library/jest-dom/extend-expect";

test("Renders the BookingForm heading", () => {
  render(<BookingForm availableTimes={[]} />);
  const headingElement = screen.getByText("Little Lemon /");
  expect(headingElement).toBeInTheDocument();
});

// test("Checking the functionality of initiliazeTimes in BookingPage", () => {
//   const initiliazeTimes = jest.fn();
//   render(<BookingPage />);

//   expect(initiliazeTimes).toBeCalledWith(new Date());
// });

// test("Checking the functionality of updateTimes in BookingPage", () => {
//   render(<BookingPage />);
// });

test("Checking the functionality of submit in BookingForm Component", () => {
  const handleSubmit = jest.fn();
  render(
    <BookingForm
      submitForm={handleSubmit}
      availableTimes={["17:00", "18:00"]}
    />
  );
  // Access the range input value and change it's value
  const date = new Date();
  const dateInput = screen.getByLabelText(/\*Date/);
  fireEvent.change(dateInput, { target: { value: `${date}` } });

  const time = "17:00";
  const timeInput = screen.getByLabelText(/\*Time/);
  fireEvent.change(timeInput, { target: { value: `${time}` } });

  const noOfGuests = "1";
  const noOfGuestsInput = screen.getByLabelText(/\*Number Of Guests/);
  fireEvent.change(noOfGuestsInput, { target: { value: `${noOfGuests}` } });

  const occasion = "birthday";
  const selectOccasionInput = screen.getByLabelText(/\*Occasion/);
  fireEvent.change(selectOccasionInput, { target: { value: `${occasion}` } });

  const submitButton = screen.getByRole("button");
  fireEvent.click(submitButton);

  expect(handleSubmit).toHaveBeenCalledTimes(1);
});

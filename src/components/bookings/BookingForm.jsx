import {
  Box,
  VStack,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Button,
  HStack,
  Select,
} from "@chakra-ui/react";
import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../App.css";

export default function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [occasionDate, setOccasionDate] = useState(new Date());

  const formik = useFormik({
    initialValues: {
      date: occasionDate,
      time: "",
      numberOfGuests: 1,
      occasion: "",
    },
    onSubmit: (values) => {
      submitForm(values);
    },
    validationSchema: Yup.object({
      date: Yup.date().required("Required"),
      time: Yup.string().required("Required"),
      numberOfGuests: Yup.number()
        .min(1, "Too little")
        .max(10, "Too big")
        .required("Required"),
      occasion: Yup.string().required("Required"),
    }),
  });

  return (
    <>
      <Box height={`calc(100vh - ${76}px)`} backgroundColor="#edefee">
        <Box
          backgroundColor="#495e57"
          className="reservations-title-box"
          textAlign="center"
        >
          <span className="title" style={{ color: "#f4ce14" }}>
            Little Lemon /
          </span>
          <span
            className="title"
            style={{ fontSize: "32px", color: "#edefee" }}
          >
            Reservations
          </span>
        </Box>
        <VStack
          backgroundColor="#edefee"
          width="100%"
          alignItems="center"
          paddingTop="2rem"
        >
          <form onSubmit={submitForm}>
            <VStack className="form-inputs" alignItems="center" gap={4}>
              <FormControl
                isInvalid={formik.touched.date && formik.errors.date}
              >
                <FormLabel htmlFor="date">*Date</FormLabel>
                <DatePicker
                  id="date"
                  className="date-picker"
                  selected={occasionDate}
                  // showTimeSelect
                  // dateFormat="Pp"
                  {...formik.getFieldProps("date")}
                  onChange={(date) => {
                    setOccasionDate(date);
                    dispatch(date);
                  }}
                />
                <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={formik.touched.time && formik.errors.time}
              >
                <FormLabel htmlFor="time">*Time</FormLabel>
                <Select
                  placeholder="Select Time"
                  id="time"
                  {...formik.getFieldProps("time")}
                >
                  {availableTimes.map((time, index) => (
                    <option key={index} value={time}>
                      {time}
                    </option>
                  ))}
                </Select>
                <FormErrorMessage>{formik.errors.time}</FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={
                  formik.touched.numberOfGuests && formik.errors.numberOfGuests
                }
              >
                <FormLabel htmlFor="numberOfGuests">
                  *Number Of Guests
                </FormLabel>
                <Input
                  id="numberOfGuests"
                  name="numberOfGuests"
                  type="number"
                  min="1"
                  max="10"
                  {...formik.getFieldProps("numberOfGuests")}
                />
                <FormErrorMessage>
                  {formik.errors.numberOfGuests}
                </FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={formik.touched.occasion && formik.errors.occasion}
              >
                <FormLabel htmlFor="occasion">*Occasion</FormLabel>
                <Select
                  id="occasion"
                  placeholder="Select Occasion"
                  {...formik.getFieldProps("occasion")}
                >
                  <option value="birthday">Birthday</option>
                  <option value="anniversary">Anniversary</option>
                </Select>
                <FormErrorMessage>{formik.errors.occasion}</FormErrorMessage>
              </FormControl>
              <HStack width="100%" justifyContent="flex-end">
                <Button
                  type="submit"
                  className={`btn ${
                    !formik.isValid || Object.keys(formik.touched).length === 0
                      ? "disabled"
                      : ""
                  }`}
                  disabled={!formik.isValid}
                >
                  Submit Reservation
                </Button>
              </HStack>
            </VStack>
          </form>
        </VStack>
      </Box>
    </>
  );
}

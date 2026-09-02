import { Form, Formik } from "formik";
import React from "react";
import * as yup from "yup";
import FormikInput from "./FormikInput";
import FormikRadio from "./FormikRadio";
import FormikSelect from "./FormikSelect";
import FormikCheckbox from "./FormikCheckbox";
import FormikTextArea from "./FormikTextArea";
const FormikPratice = () => {
  const initialValues = {
    fullName: "",
    email: "",
    password: "",
    gender: "male",
    country: "nepal",
    isMarried: false,
    description: "",
    phoneNumber: "",
    age: 0,
  };
  const onSubmit = (value, other) => {
    console.log(value);
  };
  const validateSchema = yup.object({
    fullName: yup
      .string()
      .required("fullName is required")
      .min(7, "must be at least 7 characters.")
      .max(15, "must be at most 15 characters.")
      .matches(/^[A-Za-z]+(?: [A-Za-z]+)+$/, "Enter a valid Fullname."),
    email: yup
      .string()
      .required("email is required")
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Enter a valid email"),
    password: yup
      .string()
      .required("password is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must contain 8+ characters, uppercase, lowercase, number and special character",
      ),
    gender: yup.string().required("gender is required"),
    country: yup.string().required("country is required"),
    isMarried: yup.boolean(),
    description: yup.string(),
    phoneNumber: yup
      .string()
      .required("phoneNumber is required")
      .matches(/^(98|97)\d{8}$/, "Enter a valid phone number"),

    age: yup
      .number()
      .required("age is required")
      .min(18, "must be greater than 17"),
  });
  const genderOptions = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Other", value: "other" },
  ];
  const countryOptions = [
    { label: "Nepal", value: "nepal" },
    { label: "India", value: "india" },
    { label: "China", value: "china" },
    { label: "Usa", value: "usa" },
    { label: "Norway", value: "norway" },
  ];
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validateSchema}
      >
        {(formik) => {
          return (
            <Form>
              <FormikInput
                name="fullName"
                label="Full Name"
                type="text"
                required={true}
              ></FormikInput>
              <FormikInput
                name="email"
                label="Email"
                type="email"
                required={true}
              ></FormikInput>
              <FormikInput
                name="password"
                label="Password"
                type="password"
                required={true}
              ></FormikInput>
              <FormikRadio
                name="gender"
                label="Gender"
                required={true}
                options={genderOptions}
                /*   onChange={(e) => {
                  formik.setFieldValue("gender", e.target.value);
                }} */
              ></FormikRadio>
              <FormikSelect
                name="country"
                style={{ backgroundColor: "olive", color: "white" }}
                label="Country"
                required={true}
                /*  onChange={(e) => {
                  formik.setFieldValue("country", e.target.value);
                }} */
                options={countryOptions}
              ></FormikSelect>
              <FormikCheckbox
                name="isMarried"
                label="Is Married"
                /*   onChange={(e) => {
                  formik.setFieldValue("isMarried", e.target.checked);
                }} */
              ></FormikCheckbox>
              <FormikTextArea
                name="description"
                label="Description"
                required={false}
                type="text"
                placeholder="write something.."
              ></FormikTextArea>
              <FormikInput
                name="phoneNumber"
                label="PhoneNumber"
                type="text"
                required={true}
              ></FormikInput>
              <FormikInput
                name="age"
                label="Age"
                type="number"
                required={true}
              ></FormikInput>
              <button type="submit">Submit</button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default FormikPratice;

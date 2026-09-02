import { Field, Form, Formik } from "formik";
import React from "react";
import * as yup from "yup";
import FormikInput from "./FormikInput";
import FormikTextArea from "./FormikTextArea";
import FormikSelect from "./FormikSelect";
import FormikRadio from "./FormikRadio";
import FormikCheckbox from "./FormikCheckbox";

const FormikForm = () => {
  const initialValues = { firstName: "", lastName: "", description: "" };
  const onSubmit = (value, other) => {
    console.log(value);
  };
  const validateSchema = yup.object({
    firstName: yup.string().required("Name is required"),
    lastName: yup.string().required("Email is required"),
    description: yup.string().required("Password is required"),
  });
  const countryOptions = [
    { label: "Nepal", value: "nepal" },
    { label: "India", value: "india" },
    { label: "China", value: "china" },
    { label: "Usa", value: "usa" },
    { label: "Norway", value: "norway" },
  ];
  const genderOptions = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Other", value: "other" },
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
                name="firstName"
                label="First Name"
                required={true}
                type="text"
                onChange={(e) => {
                  formik.setFieldValue("firstName", e.target.value);
                }}
              ></FormikInput>
              <FormikInput
                name="lastName"
                label="Last Name"
                required={true}
                type="text"
                style={{ backgroundColor: "grey", color: "white" }}
              ></FormikInput>
              <FormikTextArea
                name="description"
                label="Description"
                required={false}
                type="text"
                placeholder="write something.."
              ></FormikTextArea>
              <FormikSelect
                name="country"
                style={{ backgroundColor: "olive", color: "white" }}
                label="Country"
                required={true}
                onChange={(e) => {
                  formik.setFieldValue("country", e.target.value);
                }}
                options={countryOptions}
              ></FormikSelect>
              <FormikRadio
                name="gender"
                label="Gender"
                required={true}
                options={genderOptions}
                onChange={(e) => {
                  formik.setFieldValue("gender", e.target.value);
                }}
              ></FormikRadio>
              <FormikCheckbox
                required={true}
                name="isMarried"
                label="Is Married"
                onChange={(e) => {
                  formik.setFieldValue("isMarried", e.target.checked);
                }}
              ></FormikCheckbox>

              <button type="submit">Submit</button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default FormikForm;

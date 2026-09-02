import { Field } from "formik";
import React from "react";

const FormikCheckbox = ({ name, label, onChange, required, ...props }) => {
  return (
    <>
      <Field name={name}>
        {({ field, form, meta }) => {
          return (
            <div>
              <label htmlFor={name}>
                {label}
                {required ? <span style={{ color: "red" }}>*</span> : null}
              </label>
              <input
                {...field}
                {...props}
                id={name}
                type="checkbox"
                checked={meta.value}
                onChange={onChange ? onChange : field.onChange}
              ></input>
              {meta.error && meta.touched ? (
                <div style={{ color: "red" }}>{meta.error}</div>
              ) : null}
            </div>
          );
        }}
      </Field>
    </>
  );
};

export default FormikCheckbox;

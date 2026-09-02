import { Field } from "formik";
import React from "react";

const FormikRadio = ({
  name,
  label,
  onChange,
  required,
  options,
  ...props
}) => {
  return (
    <>
      <Field name={name}>
        {({ field, form, meta }) => {
          return (
            <div>
              {options.map((item, i) => {
                return (
                  <div key={i}>
                    <label htmlFor={item.value}>{item.label}</label>
                    <input
                      {...field}
                      {...props}
                      id={item.value}
                      type="radio"
                      value={item.value}
                      onChange={onChange ? onChange : field.onChange}
                      checked={meta.value === item.value}
                    ></input>
                    {meta.error && meta.touched ? (
                      <div style={{ color: "red" }}>{meta.error}</div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          );
        }}
      </Field>
    </>
  );
};

export default FormikRadio;

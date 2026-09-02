import { Field } from "formik";
import React from "react";

const FormikSelect = ({
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
              <label htmlFor={name}>
                {label}
                {required ? <span style={{ color: "red" }}>*</span> : null}
              </label>
              <select
                {...field}
                {...props}
                id={name}
                value={meta.value}
                onChange={onChange ? onChange : field.onChange}
              >
                {options.map((item, i) => {
                  return (
                    <option key={i} value={item.value} disabled={item.disabled}>
                      {item.label}
                    </option>
                  );
                })}
              </select>
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

export default FormikSelect;

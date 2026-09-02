import { Field } from "formik";
import React from "react";

const FormikInput = ({ name, label, type, onChange, required, ...props }) => {
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
                type={type}
                value={meta.value}
                /* if we only need to add one particular value we use "field.OnChange"
                        bue if multiple fields are required to be changed at once we use function inside the 
                        onChange  like below:
                            onChange={(e) => {
                            formik.setFieldValue("firstName", e.target.value);
                            }} */
                onChange={onChange ? onChange : field.onChange}
              />
              {/* validaion will run only if
                      1. onChange is triggered
                      2. onBlur(touched) is triggred
                      3. onSubmit is triggred */}
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

export default FormikInput;

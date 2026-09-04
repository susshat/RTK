import { Form, Formik } from "formik";
import * as yup from "yup";
import React, { useEffect, useState } from "react";
import FormikInput from "../formikComponents/learnFormik/FormikInput";
import FormikCheckbox from "../formikComponents/learnFormik/FormikCheckbox";
import FormikSelect from "../formikComponents/learnFormik/FormikSelect";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateProduct = () => {
  const [product, setProduct] = useState({});

  const navigate = useNavigate();
  const params = useParams();

  const getProduct = async () => {
    try {
      const result = await axios({
        url: `http://localhost:8000/product/${params.id}`,
        method: "get",
      });
      setProduct(result.data.result);
    } catch (error) {}
  };

  useEffect(() => {
    getProduct();
  }, []);
  const initialValues = {
    name: product.name,
    quantity: product.quantity,
    price: product.price,
    featured: product.featured,
    productImage: product.productImage,
    manufacturedDate: new Date(product.manufacturedDate),
    company: product.company,
  };
  const onSubmit = async (value, other) => {
    try {
      let result = await axios({
        url: `http://localhost:8000/product/${params.id}`,
        method: "patch",
        data: value,
      });
      //http://localhost:3000/products/create/products

      toast.success("Product updated successfully.");
      navigate(`/products/${params.id}`);
    } catch (error) {
      console.log(error.message);
    }
  };

  const validateSchema = yup.object({
    name: yup.string().required("fullName is required"),
    quantity: yup.number().required("quantity is required"),
    price: yup.number().required("quantity is required"),
    featured: yup.boolean().required("price is required"),
    productImage: yup.string().required("productImage is required"),
    manufacturedDate: yup.string().required("manufacturedDate is required"),
    company: yup.string().required("company is required"),
  });

  const companyOptions = [
    { label: "Select Company", value: "", disabled: true },
    { label: "apple", value: "Apple" },
    { label: "samsung", value: "Samsung" },
    { label: "mi", value: "MI" },
    { label: "gigabyte", value: "Gigabyte" },
  ];
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validateSchema}
        enableReinitialize={true}
      >
        {(formik) => {
          return (
            <Form>
              <FormikInput
                name="name"
                label="Name"
                type="text"
                required={true}
              ></FormikInput>
              <FormikInput
                name="quantity"
                label="Quantity"
                type="number"
                required={true}
              ></FormikInput>
              <FormikInput
                name="price"
                label="Price"
                type="number"
                required={true}
              ></FormikInput>
              <FormikCheckbox name="featured" label="Featured"></FormikCheckbox>
              <FormikInput
                name="productImage"
                label="Product Image"
                type="text"
                required={true}
              ></FormikInput>
              <FormikInput
                name="manufacturedDate"
                label="Manufactured Date"
                type="date"
                required={true}
              ></FormikInput>
              <FormikSelect
                name="company"
                label="Company"
                options={companyOptions}
                required={true}
              ></FormikSelect>
              <br />
              <button type="submit">Update</button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default UpdateProduct;

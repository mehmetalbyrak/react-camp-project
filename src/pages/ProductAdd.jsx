import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { Button, FormField, Label } from "semantic-ui-react";
import KodlamaIoTextInput from "../utilities/customFormControls/KodlamaIoTextInput";

export default function () {
  const initialValues = { title: "", price: 90 };
  const schema = Yup.object({
    title: Yup.string().required("Product Title is required"),
    price: Yup.number()
      .required("Product Price is required")
      .positive("Please enter a positive number"),
  });
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form className="ui form">
        <KodlamaIoTextInput name="title" placeholder="Product Title" />
        <KodlamaIoTextInput name="price" placeholder="Product Price" />

        <Button color="green" type="submit">
          Add
        </Button>
      </Form>
    </Formik>
  );
}

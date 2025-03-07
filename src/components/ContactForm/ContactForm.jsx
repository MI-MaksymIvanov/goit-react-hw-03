import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import { nanoid } from "nanoid";
import * as Yup from "yup";

import css from "./ContactForm.module.css";

const contactFormValidator = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short Name!")
    .max(50, "Too long Name")
    .required("Required!"),
  number: Yup.string()
    .min(3, "Too short Number!")
    .max(50, "Too long Number")
    .required("Required!"),
});

export default function ContactForm({ onAdd }) {
  const nameId = useId();
  const numberId = useId();

  const handleSubmit = (values, actions) => {
    const newContact = { id: nanoid(), ...values };
    onAdd(newContact);
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={contactFormValidator}
    >
      <Form className={css.contactForm}>
        <label className={css.contactFormLabel} htmlFor={nameId}>
          Name
        </label>
        <Field
          className={css.contactFormField}
          type="text"
          name="name"
          id={nameId}
        />
        <ErrorMessage
          className={css.errorMessage}
          name="name"
          component="span"
        />

        <label className={css.contactFormLabel} htmlFor={numberId}>
          Number
        </label>
        <Field
          className={css.contactFormField}
          type="tel"
          name="number"
          id={numberId}
        />
        <ErrorMessage
          className={css.errorMessage}
          name="number"
          component="span"
        />

        <button className={css.contactFormBtn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}

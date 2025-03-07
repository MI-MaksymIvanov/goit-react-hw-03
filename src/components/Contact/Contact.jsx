import { PiUser, PiPhone } from "react-icons/pi";

import css from "./Contact.module.css";

export default function Contact({ contact: { id, name, number }, onDelete }) {
  return (
    <>
      <div className={css.contactItemWrapper}>
        <p className={css.contactItemInfo}>
          <PiUser size={24} />
          {name}
        </p>
        <p className={css.contactItemInfo}>
          <PiPhone size={24} />
          {number}
        </p>
      </div>
      <button
        className={css.contactBtnDelete}
        type="button"
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </>
  );
}

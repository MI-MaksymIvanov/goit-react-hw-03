import Contact from "../Contact/Contact.jsx";

import css from "./ContactList.module.css";

export default function ContactList({ contacts, onDelete }) {
  return (
    <ul className={css.contactList}>
      {contacts.map((contact) => {
        return (
          <li className={css.contactListItem} key={contact.id}>
            <Contact contact={contact} onDelete={onDelete} />
          </li>
        );
      })}
    </ul>
  );
}

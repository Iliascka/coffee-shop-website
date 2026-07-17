import { useState } from "react";

function ReservationForm() {
  const [name, setName] = useState("");
  const [guests, setGuests] = useState("");
  const [date, setDate] = useState("");
  const [email, setEmail] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  return (
    <section id="book-a-table" className="reservation">
      <h2 className="reservation__title">Book a table</h2>
      <form className="reservation__form form" noValidate>
        <fieldset className="form__fieldset">
          <label htmlFor="text" className="form__label">
            Name *
            <input
              id="name-input"
              className="form__input"
              type="text"
              placeholder="Name Surname"
              minLength="4"
              maxLength="20"
              required
            />
            <span className="name-input-error form__error"></span>
          </label>
          <label htmlFor="number" className="form__label">
            Number of Guests *
            <input
              id="guests-input"
              className="form__input"
              type="number"
              min="1"
              max="8"
              placeholder="1-8"
              required
            />
            <span className="guests-input-error form__error"></span>
          </label>
          <label htmlFor="datetime-local" className="form__label">
            Date & Time *
            <input
              id="datetime-input"
              className="form__input"
              type="datetime-local"
              required
            />
            <span className="datetime-input-error form__error"></span>
          </label>
          <label htmlFor="email" className="form__label">
            Your email *
            <input
              id="email-input"
              className="form__input"
              type="email"
              placeholder="email@email.com"
              required
            />
            <span className="email-input-error form__error"></span>
          </label>
        </fieldset>
        <button type="sumbit" className="form__button">
          Book a table
        </button>
        <label
          htmlFor="checkbox"
          className="form__label form__label_type_checkbox"
        >
          <input
            id="checkbox"
            className="form__checkbox"
            type="checkbox"
            defaultChecked
            required
          />
          I agree with the terms of use
          <span className="checkbox-error form__error"></span>
        </label>
      </form>
    </section>
  );
}

export default ReservationForm;

import { useState } from "react";

function ReservationForm() {
  const [values, setValues] = useState({
    name: "",
    guests: "",
    date: "",
    email: "",
    isChecked: false,
  });

  function handleChange(evt) {
    const { name, value, type, checked } = evt.target;

    setValues((currentValues) => ({
      ...currentValues,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  return (
    <section id="book-a-table" className="reservation">
      <h2 className="reservation__title">Book a table</h2>
      <form className="reservation__form form" noValidate>
        <fieldset className="form__fieldset">
          <label htmlFor="name-input" className="form__label">
            Name *
            <input
              id="name-input"
              className="form__input"
              type="text"
              placeholder="Name Surname"
              minLength="4"
              maxLength="20"
              required
              name="name"
              value={values.name}
              onChange={handleChange}
            />
            {}
            <span className="name-input-error form__error"></span>
          </label>
          <label htmlFor="guests-input" className="form__label">
            Number of Guests *
            <input
              id="guests-input"
              className="form__input"
              type="number"
              min="1"
              max="8"
              placeholder="1-8"
              name="guests"
              value={values.guests}
              onChange={handleChange}
              required
            />
            <span className="guests-input-error form__error"></span>
          </label>
          <label htmlFor="datetime-input" className="form__label">
            Date & Time *
            <input
              id="datetime-input"
              className="form__input"
              type="datetime-local"
              name="date"
              value={values.date}
              onChange={handleChange}
              required
            />
            <span className="datetime-input-error form__error"></span>
          </label>
          <label htmlFor="email-input" className="form__label">
            Your email *
            <input
              id="email-input"
              className="form__input"
              type="email"
              placeholder="email@email.com"
              name="email"
              value={values.email}
              onChange={handleChange}
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
            name="isChecked"
            checked={values.isChecked}
            className="form__checkbox"
            onChange={handleChange}
            type="checkbox"
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

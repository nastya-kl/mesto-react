import React from "react";

function PopupWithForm(props) {
  const className = `popup popup_type_${props.name} ${props.isOpen ? 'popup_opened' : ''}`;

  return (
    <div className={className} onClick={(e) => e.target.classList.contains('popup') && props.onClose()}>
      <div className="popup__container">
        <button
          className="popup__close-icon"
          type="button"
          aria-label="Кнопка закрыть окно"
          onClick={props.onClose}
        ></button>
        <h2 className="popup__heading">{props.title}</h2>
        <form
          className="popup__form"
          action="#"
          name={props.name}
          onSubmit={props.onSubmit}
          noValidate>
            {props.children}
            <button className="popup__form-button" type="submit">
              {props.buttonText}
            </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;

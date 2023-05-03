import React from "react";

function ImagePopup(props) {
  const className = `popup popup_type_image popup_background_dark ${
    props.isOpen ? "popup_opened" : ""
  }`;

  return (
    <div className={className} onClick={(e) => e.target.classList.contains('popup') && props.onClose()}>
      <div className="popup__image-container">
        <button
          className="popup__close-icon"
          type="button"
          aria-label="Кнопка закрыть окно"
          onClick={props.onClose}
        ></button>
        <figure className="popup__figure">
          <img className="popup__card-image" src={props.card.link} alt={props.card.name} />
          <figcaption className="popup__image-caption">{props.card.name}</figcaption>
        </figure>
      </div>
    </div>
  );
}

export default ImagePopup;

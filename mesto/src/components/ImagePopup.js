import React from 'react';

function ImagePopup() {

  return (
  <div className="popup popup_type_image popup_background_dark">
    <div className="popup__image-container">
      <button
        className="popup__close-icon"
        type="button"
        aria-label="Кнопка закрыть окно"
      ></button>
      <figure className="popup__figure">
        <img className="popup__card-image" src="#" alt="" />
        <figcaption className="popup__image-caption"></figcaption>
      </figure>
    </div>
  </div>
  );
}

export default ImagePopup;
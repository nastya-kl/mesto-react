import React from "react";

function Card(props) {

  const likesNumber = props.card.likes.length;

  return (
    <li className="element">
      <button
        className="element__delete-button"
        type="button"
        aria-label="Кнопка удаления карточки"
      ></button>
      <div
        className="element__image"
        style={{ backgroundImage: `url(${props.card.link})` }}
        onClick={props.handleClick}
      ></div>
      <div className="element__lower-part">
        <h2 className="element__heading">{props.card.name}</h2>
        <div className="element__like-container">
          <button
            className="element__like-button"
            type="button"
            aria-label="Кнопка поставить лайк"
          ></button>
          <p className="element__like-number">{likesNumber}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;

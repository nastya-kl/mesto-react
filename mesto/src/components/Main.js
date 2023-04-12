import React from 'react';


function Main(props) {

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__info">
          <div className="profile__avatar-container" onClick={props.onEditAvatar}>
            <img
              className="profile__avatar"
              src="#"
              alt="Фото профиля"
            />
          </div>
          <div className="profile__text">
            <h1 className="profile__name">Жак-Ив Кусто</h1>
            <button
              className="profile__edit-button"
              type="button"
              aria-label="Кнопка редактирования профиля"
              onClick={props.onEditProfile}
            ></button>
            <p className="profile__description">Исследователь океана</p>
          </div>
        </div>
        <button
          className="profile__add-button"
          type="button"
          aria-label="Кнопка добавления фото"
          onClick={props.onAddPlace}
        ></button>
      </section>

      <section className="elements" aria-label="Секция с блоками фотографий">
        <ul className="elements__container"></ul>
      </section>
    </main>
  );
}

export default Main;
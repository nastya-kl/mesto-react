import React from 'react';


function Main() {

  function handleEditAvatarClick() {
    const popupAvatar = document.querySelector('.popup_type_avatar');
    popupAvatar.classList.add('popup_opened');

  }

  function handleEditProfileClick() {
    const popupInfo = document.querySelector('.popup_type_info');
    popupInfo.classList.add('popup_opened');

  }

  function handleAddPlaceClick() {
    const popupAdd = document.querySelector('.popup_type_add');
    popupAdd.classList.add('popup_opened');

  }

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__info">
          <div className="profile__avatar-container" onClick={handleEditAvatarClick}>
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
              onClick={handleEditProfileClick}
            ></button>
            <p className="profile__description">Исследователь океана</p>
          </div>
        </div>
        <button
          className="profile__add-button"
          type="button"
          aria-label="Кнопка добавления фото"
          onClick={handleAddPlaceClick}
        ></button>
      </section>

      <section className="elements" aria-label="Секция с блоками фотографий">
        <ul className="elements__container"></ul>
      </section>
    </main>
  );
}

export default Main;
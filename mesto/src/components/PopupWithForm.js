import React from 'react';

function PopupWithForm() {

  return (
    <>
      <div className="popup popup_type_info">
        <div className="popup__container">
          <button
            className="popup__close-icon"
            type="button"
            aria-label="Кнопка закрыть окно"
          ></button>
          <h2 className="popup__heading">Редактировать&nbsp;профиль</h2>
          <form className="popup__form" action="#" name="profile-form" novalidate>
            <label className="popup__label">
              <input
                className="popup__input popup__input_type_name"
                id="profile-name-input"
                type="text"
                name="name"
                placeholder="Введите имя"
                minlength="2"
                maxlength="40"
                required
              />
              <span className="profile-name-input-error popup__input-error"></span>
            </label>
            <label className="popup__label">
              <input
                className="popup__input popup__input_type_job"
                id="profile-job-input"
                type="text"
                name="job"
                placeholder="Введите описание"
                minlength="2"
                maxlength="200"
                required
              />
              <span className="profile-job-input-error popup__input-error"></span>
            </label>
            <button className="popup__form-button" type="submit">Сохранить</button>
          </form>
        </div>
      </div>

      <div className="popup popup_type_add">
        <div className="popup__container">
          <button
            className="popup__close-icon"
            type="button"
            aria-label="Кнопка закрыть окно"
          ></button>
          <h2 className="popup__heading">Новое&nbsp;место</h2>
          <form className="popup__form" name="profile-form" novalidate>
            <label className="popup__label">
              <input
                className="popup__input popup__input_type_image-name"
                id="image-name-imput"
                type="text"
                name="name"
                placeholder="Название"
                minlength="2"
                maxlength="30"
                required
              />
              <span className="image-name-imput-error popup__input-error"></span>
            </label>
            <label className="popup__label">
              <input
                className="popup__input popup__input_type_image-link"
                id="image-url-imput"
                type="url"
                name="link"
                placeholder="Ссылка на картинку"
                required
              />
              <span className="image-url-imput-error popup__input-error"></span>
            </label>
            <button className="popup__form-button" type="submit">Создать</button>
          </form>
        </div>
      </div>

      <div className="popup popup_type_avatar">
        <div className="popup__container">
          <button
            className="popup__close-icon"
            type="button"
            aria-label="Кнопка закрыть окно"
          ></button>
          <h2 className="popup__heading">Обновить&nbsp;аватар</h2>
          <form className="popup__form" action="#" name="profile-form" novalidate>
            <label className="popup__label">
              <input
                className="popup__input popup__input_type_avatar"
                id="avatar-url-imput"
                type="url"
                name="link"
                placeholder="Ссылка на картинку"
                required
              />
              <span className="avatar-url-imput-error popup__input-error"></span>
            </label>
            <button className="popup__form-button" type="submit">Сохранить</button>
          </form>
        </div>
      </div>

      <div className="popup popup_type_delete">
        <div className="popup__container">
          <button
            className="popup__close-icon"
            type="button"
            aria-label="Кнопка закрыть окно"
          ></button>
          <div className="popup__delete-container">
            <h2 className="popup__delete-heading">Вы&nbsp;уверены?</h2>
            <button className="popup__form-button" type="submit">Да</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PopupWithForm;
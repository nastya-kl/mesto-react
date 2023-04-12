import React from 'react';
import api from '../utils/Api';


function Main(props) {
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();

  React.useEffect(() => {
    api.getUserInfo()
      .then((data) => {
        setUserAvatar(data.avatar);
        setUserName(data.name);
        setUserDescription(data.about);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
  });

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__info">
          <div className="profile__avatar-container" onClick={props.onEditAvatar}>
            <div
              className="profile__avatar"
              src="#"
              alt="Фото профиля"
              style={{
                backgroundImage: `url(${userAvatar})`
              }}>
            </div>
          </div>
          <div className="profile__text">
            <h1 className="profile__name">{userName}</h1>
            <button
              className="profile__edit-button"
              type="button"
              aria-label="Кнопка редактирования профиля"
              onClick={props.onEditProfile}
            ></button>
            <p className="profile__description">{userDescription}</p>
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
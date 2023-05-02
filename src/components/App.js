import React from "react";
import api from '../utils/Api';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import CurrentUserContext from "./contexts/CurrentUserContext";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isConfirmPupopOpen, setIsConfirmPupopOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userData, data]) => {
        setCurrentUser(userData);
        setCards(data);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
  }, []);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(data) {
    setSelectedCard(data);
    setIsConfirmPupopOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsConfirmPupopOpen(false);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
          cards={cards}/>
        <Footer />

        <PopupWithForm title="Обновить аватар" name="avatar" buttonText="Сохранить" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
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
        </PopupWithForm>

        <PopupWithForm title="Редактировать профиль" name="info" buttonText="Сохранить" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
          <label className="popup__label">
            <input
              className="popup__input popup__input_type_name"
              id="profile-name-input"
              type="text"
              name="name"
              placeholder="Введите имя"
              minLength="2"
              maxLength="40"
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
              minLength="2"
              maxLength="200"
              required
            />
            <span className="profile-job-input-error popup__input-error"></span>
          </label>
        </PopupWithForm>

        <PopupWithForm title="Новое место" name="add" buttonText="Создать" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
          <label className="popup__label">
            <input
              className="popup__input popup__input_type_image-name"
              id="image-name-imput"
              type="text"
              name="name"
              placeholder="Название"
              minLength="2"
              maxLength="30"
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
        </PopupWithForm>

        <PopupWithForm title="Вы уверены?" name="delete" buttonText="Да"></PopupWithForm>

        <ImagePopup card={selectedCard} isOpen={isConfirmPupopOpen} onClose={closeAllPopups}/>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;

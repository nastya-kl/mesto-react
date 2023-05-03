import React from "react";
import CurrentUserContext from "./contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup(props) {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, props.isOpen]); 

  function changeName(e) {
    setName(e.target.value);
  }

  function changeDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  
    props.onUpdateUser({
      name: name,
      about: description,
    });
  } 

  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="info"
      buttonText="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
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
          value={name || ''}
          onChange={changeName}
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
          value={description || ''}
          onChange={changeDescription}
        />
        <span className="profile-job-input-error popup__input-error"></span>
      </label>
    </PopupWithForm>
  )
}

export default EditProfilePopup;
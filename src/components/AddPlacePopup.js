import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  const [imageLink, setImageLink] = React.useState('');
  const [imageName, setImageName] = React.useState('');

  React.useEffect(() => {
    setImageLink('');
    setImageName('');
  }, [props.isOpen])

  function changeImageLink(e) {
    setImageLink(e.target.value);
  }

  function changeImageName(e) {
    setImageName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  
    props.onAddPlace({
      link: imageLink,
      name: imageName
    });
  }

  return (
    <PopupWithForm
      title="Новое место"
      name="add"
      buttonText={props.isLoading ? 'Сохранение...' : 'Создать'}
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
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
          value={imageName || ''}
          onChange={changeImageName}
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
          value={imageLink || ''}
          onChange={changeImageLink}
        />
        <span className="image-url-imput-error popup__input-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default AddPlacePopup;

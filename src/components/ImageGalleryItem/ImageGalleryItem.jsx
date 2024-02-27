import React from "react";

const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  handleChangeModal,
}) => {
  return (
    <>
      <li
        onClick={() => handleChangeModal(largeImageURL)}
        className="GalleryItem"
      >
        <img className="ImageGalleryItemImage" src={webformatURL} alt="" />
      </li>
    </>
  );
};

export default ImageGalleryItem;

import { useState, useEffect } from "react";
import fetchImages from "./api/fetchImages";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Searchbar from "./components/Searchbar/Searchbar";
import Pagination from "./components/Pagination/Pagination";

import Loader from "./components/Loader/Loader";
import Modal from "./components/Modal/Modal";

const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("flowers+red");
  const [page, setPage] = useState(1);
  const [totalHits, setTotalHits] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [img, setImg] = useState(null);

  useEffect(() => {
    fetchImages(setImages, query, page, setTotalHits);
  }, [query, page]);

  const handleSubmit = (value) => {
    setQuery(value);
  };

  useEffect(() => {
    setPage(1);
  }, [query]);

  const count = totalHits / 20;
  const changePage = (value) => {
    if (value === "plus" && page < count) {
      setPage(page + 1);
    }
    if (value === "minus" && page > 1) {
      setPage(page - 1);
    }
  };

  const handleChangeModal = (largeImageURL) => {
    setShowModal(true);
    setImg(largeImageURL);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div className="App">
      <Searchbar handleSubmit={handleSubmit} />

      {images.length > 0 && query ? (
        <>
          <ImageGallery handleChangeModal={handleChangeModal} images={images} />
          <Pagination changePage={changePage} page={page} count={count} />
        </>
      ) : (
        <Loader />
      )}

      {showModal && <Modal largeImageURL={img} handleClose={handleClose} />}
    </div>
  );
};

export default App;

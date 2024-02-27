import axios from "axios";

const fetchImages = async (setImages, query, page, setTotalHits) => {
  try {
    await axios
      .get(
        `https://pixabay.com/api/?key=28598653-ac578a657988498e7082adc71&q=${query}&image_type=photo&lang=ru&page=${page}`
      )
      .then((res) => {
        setImages(res.data.hits);
        setTotalHits(res.data.total);
      });
  } catch (error) {
    console.error("Failed to fetch images from" + error);
  }
};

export default fetchImages;

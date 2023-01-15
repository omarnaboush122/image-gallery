import { useEffect, useState } from "react";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";
import Loading from "./components/Loading";

const App = () => {
  const [images, setImages] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("flowers");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=32862587-207f7d81cbe3797731937a93d&q=${searchTerm}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [searchTerm]);

  const allImages = images.map((image) => (
    <ImageCard key={image.id} image={image} />
  ));

  return (
    <div className="container mx-auto">
      <ImageSearch searchText = {(text) => setSearchTerm(text)}/>
      {isloading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-3 gap-4">{allImages}</div>
      )}
    </div>
  );
};

export default App;

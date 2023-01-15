import { useEffect, useState } from "react";
import ImageCard from "./components/ImageCard";

const App = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("flowers");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=32862587-207f7d81cbe3797731937a93d&q=${searchTerm}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setLoading(false);
      })
      .catch(err => console.log(err))
  }, []);

  const allImages = images.map(image => (
    <ImageCard key={image.id} image={image}/>
  ))

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-3 gap-4">
        {allImages}
      </div>
    </div>
  );
};

export default App;

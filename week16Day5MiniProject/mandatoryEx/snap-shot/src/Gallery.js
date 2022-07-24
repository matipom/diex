import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Gallery = (props) => {
  const [photos, setPhotos] = useState([]);
  const params = useParams();
  console.log("params.id=>", params.id);
  useEffect(() => {
    const apiUrl = `https://api.pexels.com/v1/search?per_page=30&query=${params.id}`;

    fetch(apiUrl, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization:
          "563492ad6f91700001000001cfcfa01418cf4e67b94dd2bd9c5a3da7",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.photos);
        setPhotos(data.photos);
      });
  }, []);

  return (
    <div>
      {photos.map((photo, id) => {
        return (
          <div key={id} style={{ display: "inline-block" }}>
            <img src={photo.src.original} style={{ width: "200px" }} />
          </div>
        );
      })}
    </div>
  );
};

export default Gallery;

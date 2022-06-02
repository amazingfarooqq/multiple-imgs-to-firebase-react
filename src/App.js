import { useEffect, useState } from "react";
import "./App.css";
import { storage } from "./firebase/config";

import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import { v4 } from "uuid";

function App() {
  const [images, setImages] = useState(null);
  const [imagesList, setImagesList] = useState([])
  const [counter, setCounter] = useState(1)

  const handleOnChange = (e) => {
    if (e.target.files) {
      setImages([...e.target.files]);
      e.target.files = null;
    }
  };


  const handleUpload = () => {
    
    setCounter(1+counter)
    setImagesList([])
    images.map(item => {
      const imageRef = ref(storage, `property/${counter}/${item.name + v4()}`);
      uploadBytes(imageRef, item).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          setImagesList((prev) => [...prev, url])
        });
      });
    })
  };

  return (
    <div>
      <h1>{counter}</h1>
      <input multiple type="file" onChange={handleOnChange} />
      <button onClick={handleUpload}>Upload</button>

      <br /><br />

      {imagesList.map(item => {
        return <img src={item} height={100} width={100}/>
      })}
     
    </div>
  );
}

export default App;

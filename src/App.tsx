import { SwipeGallery } from "./components/SwipeGallery";

const images = [
  { url: "images/02.jpg", description: "myPhoto 02" },
  { url: "images/03.jpg", description: "myPhoto 03" },
  { url: "images/04.jpg", description: "myPhoto 04" },
  { url: "images/05.jpg", description: "myPhoto 05" },
  { url: "images/06.jpg", description: "myPhoto 06" },
  { url: "images/07.jpg", description: "myPhoto 07" },
  { url: "images/08.jpg", description: "myPhoto 08" },
];

function App() {
  return (
    <>
      <div className="container">
        <h1>Swipe Gallery</h1>
        <SwipeGallery images={images} />
      </div>
    </>
  );
}

export default App;

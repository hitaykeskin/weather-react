import "./App.css";
import Weather from "./Weather";
import Image from "./Image";
import Forecast from "./Forecast";
import Footer from "./Footer";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="fullCard" id="thumbnail">
          <Weather />
          <Image />
          <Forecast />
          <Footer />
        </div>
      </div>
    </div>
  );
}

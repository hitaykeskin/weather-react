import "./App.css";
import Title from "./Title";
import Units from "./Units";
import Current from "./Current";
import Image from "./Image";
import Information from "./Information";
import Forecast from "./Forecast";
import Footer from "./Footer";
function App() {
  return (
    <div className="App">
      <div className="fullCard" id="thumbnail">
        <Title />
        <Units />
        <Current />
        <Image />
        <Information />
        <Forecast />
        <Footer />
      </div>
    </div>
  );
}

export default App;

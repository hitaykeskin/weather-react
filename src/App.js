import "./App.css";
import Weather from "./Weather";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="fullCard" id="thumbnail">
          <Weather />
          <footer>
            <a
              href="https://github.com/hitaykeskin/weather-react"
              target="_blank"
            >
              Open source code by
            </a>{" "}
            hitayco♡
          </footer>
        </div>
      </div>
    </div>
  );
}

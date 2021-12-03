import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="Art" />
        </main>
        <footer className="App-footer">
          <small>
            This project was coded by Catarina Torres and is{" "}
            <a href="https://github.com/catarina6t">open-sourced on GitHub</a>{" "}
            and hosted on{" "}
            <a href="https://happy-spence-e633e2.netlify.app/"> Netlify </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

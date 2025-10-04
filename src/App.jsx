import "./App.css";

function App() {
  return (
    <div className="container">
      {/* Linkerhelft */}
      <div className="left">
        <div className="content">
          <h2>Under Construction</h2>
          <h1>Studio Umami</h1>
          <h3>Strategie | Beleving | Groei</h3>

          <a
            href="https://www.jobvanoossanen.nl"
            target="_blank"
            rel="noreferrer"
            className="cta-button"
          >
            www.jobvanoossanen.nl
          </a>
        </div>



      </div>

      {/* Rechterhelft */}
      <div className="right">
        <img src="/logo.png" alt="Studio Umami logo" className="logo" />
      </div>
    </div>
  );
}

export default App;

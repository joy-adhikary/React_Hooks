import "./App.css";
import Mahadev from "./assets/Img/mahadev.jpg";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Mahadev} className="mahadev" alt="Mahadev" />
      </header>
      <div className="App-intro">
        <p>
          This is the main repository of the project.Every hook components has a
          unique branch named . just go to the that branch and run it .
        </p>
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import Navbar from "./components/Navbar";
import Ordernow from "./components/Ordernow";

function App() {

  return (
    <div className="App">

      <Navbar />

      <Ordernow />


      <header className="App-header">

      <img
          className="header-logo"
          src="./images/taco_logo_clear.png"
          alt="taco truckin logo"
        />

        <div className="orange-border">
        <div className="row-container">

          <div id="img_0" className="img-container">
            <img className="img" src="./images/quesadillas_1.jpg" alt="quesadillas" />
          </div>

          <div id="img_1" className="img-container">
            <img className="img" src="./images/tacos_2.jpg" alt="tacos" />
          </div>

          <div id="img_2" className="img-container">
            <img className="img" src="./images/tacos_3.jpg" alt="tacos" />
          </div>

        </div>
        </div>




      </header>
      
    </div>
  );
}

export default App;

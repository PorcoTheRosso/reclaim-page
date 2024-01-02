import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="index">
    <div className="div">
      <div className="text-wrapper">CLAIM YOUR REWARD</div>
      <div className="overlap">
        <div className="box-password">
          <div className="overlap-group">
            <div className="text-wrapper-2">ENTER YOUR PASSCODE</div>
          </div>
        </div>
        <button className="button-submit">
          <div className="div-wrapper">
            <div className="text-wrapper-3">SUBMIT</div>
          </div>
        </button>
      </div>
      <div className="reward-box-beige">
        <img
          className="img"
          alt="Beige"
          src="https://cdn.animaapp.com/projects/6436f002ef3e692942ef50ac/releases/6591e11e8da30682b365b10e/img/beige05-1@2x.png"
        />
      </div>
      <div className="reward-box-green">
        <img
          className="img"
          alt="Green"
          src="https://cdn.animaapp.com/projects/6436f002ef3e692942ef50ac/releases/6591e11e8da30682b365b10e/img/green05@2x.png"
        />
      </div>
      <div className="reward-box-blue">
        <img
          className="img"
          alt="Blue"
          src="https://cdn.animaapp.com/projects/6436f002ef3e692942ef50ac/releases/6591e11e8da30682b365b10e/img/blue05@2x.png"
        />
      </div>
      <header className="header">
        <div className="navbar">
          <div className="text-wrapper-4">MERCH</div>
          <div className="text-wrapper-5">COLLECTIONS</div>
          <div className="text-wrapper-6">MANAGE YOUR YACHTS</div>
          <div className="text-wrapper-7">APE HARBOUR</div>
          <div className="overlap-2">
            <img
              className="ape-harbour-logos"
              alt="Ape harbour logos"
              src="https://cdn.animaapp.com/projects/6436f002ef3e692942ef50ac/releases/6591e11e8da30682b365b10e/img/ape-harbour-logos-white-1.png"
            />
            <div className="rectangle" />
          </div>
          <div className="button-connect">
            <div className="overlap-group-2">
              <div className="text-wrapper-8">CONNECT</div>
            </div>
          </div>
        </div>
      </header>
    </div>
  </div>
  );
}

export default App;

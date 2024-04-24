import './App.css';
import { useState } from 'react';
import ios from "./asserts/1713961486302560.MP4";
import android from "./asserts/1713961889761409.MP4";

function App() {
  const [input, setInput] = useState();

  const handleInput = (e) => {
    setInput("https://wa.me/" + e.target.value)
  }

  return (
    <div>
      <div className='main'>
        <div >
          <div className='iDiv'><i class="fa fa-whatsapp" aria-hidden="true"></i></div>
          <h1 >Open In Whatsapp</h1>
          <input pattern="\d*" placeholder='eg. 917777000077' type="number" onChange={(e) => handleInput(e)} />
          <div className='iDiv'>
            <button><a href={input}>Open</a></button>
          </div>
          <h1 style={{ textAlign: "center" }}>Add to Home</h1>
        </div>
      </div>
      <div className='videoDiv'>
          <div>
            <h1 style={{ textAlign: "center" }}>IOS</h1>
            <video autoPlay controls >
              <source src={ios} type="video/mp4" />
            </video>
          </div>
          <div>
            <h1 style={{ textAlign: "center" }}>Android</h1>
            <video autoPlay controls >
              <source src={android} type="video/mp4" />
            </video>
          </div>
      </div>
    </div>
  );
}

export default App;

import React from 'react';
// import logo from './logo.svg';
import './App.css';
import './glitch.css';

import './feed.js'

import logo from './arrow.png'
import eth from './eth.png'
import typewriter from './typewriter.jpeg'

function App() {
  return (
    <div className="App">
         <img className="App-logo" src={logo} alt="logo" width={200} height={200}/>
        <canvas id='canvas'></canvas>
        {/*<p>alternative futures feed</p>*/}

<section class="portfolio-experiment">
  <div class="experiment-title" contenteditable="true">write alternative futures</div>
</section>
        <div className="typewriter">
          <img src={typewriter} width={400} height={400}/>
        </div>
    </div>
  );
}

export default App;

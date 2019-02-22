import React from 'react';

import catGif from './assets/cat.gif';
import doItGif from './assets/doIt.gif';
import frameImage from './assets/frame.png';
import './styles.scss';

const HomePage = () => (
  <div className="home-page">
    {window.setHelmet({ title: 'home' })}
    <div className="img-group">
      <img src={frameImage} alt="frameImage" className="frame-image" />
      <img src={frameImage} alt="frameImage" className="frame-image" />
    </div>
    <div className="img-mask">
      <img src={catGif} alt="catGif" className="gif-img" />
      <img src={doItGif} alt="doItGif" className="gif-img" />
    </div>
    <div className="img-mask">
      <div className="div-mask">
        <p>基于 react 的 web 框架 <em><br /> react & redux & redux-form</em></p>
      </div>
      <div className="div-mask">
        <p>版本号:<em> 0.0.1</em></p>
      </div>
    </div>
  </div>
);

export default HomePage;

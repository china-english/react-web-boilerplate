import React from 'react';

import { ITEM_GROUP } from './constants';
import frameImage from './assets/frame.png';
import './styles.scss';

class HomePage extends React.Component {
  renderItem = (item) => (
    <div className="item-content">
      <img src={frameImage} alt="frameImage" className="frame-image" />
      <img src={item.image} alt="catGif" className="gif-img" />
      <div className="div-mask">
        <p>{item.title}<em><br /> {item.describe}</em></p>
      </div>
    </div>
  )
  render() {
    return (
      <div className="home-page">
        {window.setHelmet({ title: 'home' })}
        <div className="image-group">
          { ITEM_GROUP.map((item) => this.renderItem(item)) }
        </div>
      </div>
    );
  }
}

export default HomePage;

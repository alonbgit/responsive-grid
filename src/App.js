import React, { Component, Fragment } from 'react';
import ResponsiveGrid from './components/responsive-grid/responsive-grid';
import './App.scss';

class App extends Component {
  renderImage (url, index, height) {
    return (
      <div className='image-container' height={height}>
        <img src={url} style={{ width: '100%', height: 'auto' }} alt='' />
        <div className='index'>{index}</div>
      </div>
    )
  }

  render() {
    const url = 'http://eskipaper.com/images/beautiful-yellow-flowers-2.jpg';
    const url2 = 'https://upload.wikimedia.org/wikipedia/commons/1/18/Flowers_of_india_16.jpg';
    const url3 = 'https://images4-b.ravelrycache.com/uploads/dunnica/328600413/01_Crocodile_Flower_small2.jpg';
    return (
      <div className="App">
        <div className='grid-container'>
          <ResponsiveGrid layouts={[
            {
                columns: 1,
                screenWidth: 0,
                gutterWidth: 40,
                gutterHeight: 40,
            },
            {
              columns: 2,
              screenWidth: 760,
              gutterWidth: 30,
              gutterHeight: 30,
            },
            {
              columns: 3,
              screenWidth: 1024,
              gutterWidth: 20,
              gutterHeight: 20,
            },
            {
              columns: 4,
              screenWidth: 1440,
              gutterWidth: 20,
              gutterHeight: 20,
            },
            {
              columns: 5,
              screenWidth: 1700,
              gutterWidth: 20,
              gutterHeight: 20,
            },
          ]}>
            {this.renderImage(url, 0, 205)}
            {this.renderImage(url2, 1, 648)}
            {this.renderImage(url3, 2, 320)}
            {this.renderImage(url, 3, 205)}
            {this.renderImage(url2, 4, 648)}
            {this.renderImage(url3, 5, 320)}
            {this.renderImage(url, 6, 205)}
            {this.renderImage(url2, 7, 648)}
            {this.renderImage(url3, 8, 320)}
            {this.renderImage(url, 9, 205)}
            {this.renderImage(url2, 10, 648)}
            {this.renderImage(url3, 11, 320)}
            {this.renderImage(url, 12, 205)}
            {this.renderImage(url2, 13, 648)}
            {this.renderImage(url3, 14, 320)}
            {this.renderImage(url, 0, 205)}
            {this.renderImage(url2, 1, 648)}
            {this.renderImage(url3, 2, 320)}
            {this.renderImage(url, 3, 205)}
            {this.renderImage(url2, 4, 648)}
            {this.renderImage(url3, 5, 320)}
            {this.renderImage(url, 6, 205)}
            {this.renderImage(url2, 7, 648)}
            {this.renderImage(url3, 8, 320)}
            {this.renderImage(url, 9, 205)}
            {this.renderImage(url2, 10, 648)}
            {this.renderImage(url3, 11, 320)}
            {this.renderImage(url, 12, 205)}
            {this.renderImage(url2, 13, 648)}
            {this.renderImage(url3, 14, 320)}
            {this.renderImage(url3, 5, 320)}
            {this.renderImage(url3, 5, 320)}
            {this.renderImage(url2, 13, 648)}
            {this.renderImage(url3, 14, 320)}
            {this.renderImage(url2, 13, 648)}
            {this.renderImage(url3, 14, 320)}
            {this.renderImage(url2, 13, 648)}
            {this.renderImage(url3, 14, 320)}
            {this.renderImage(url2, 13, 648)}
            {this.renderImage(url3, 14, 320)}
            {this.renderImage(url3, 14, 320)}
            {this.renderImage(url3, 14, 320)}
            {this.renderImage(url3, 14, 320)}
            {this.renderImage(url3, 14, 320)}
            {this.renderImage(url3, 14, 320)}
            {this.renderImage(url3, 14, 320)}
            {this.renderImage(url2, 14, 320)}
            {this.renderImage(url2, 5, 320)}
            {this.renderImage(url2, 5, 320)}
            {this.renderImage(url2, 5, 320)}
          </ResponsiveGrid>
        </div>
      </div>
    );
  }
}

export default App;

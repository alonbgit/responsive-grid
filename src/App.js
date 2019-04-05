import React, { Component } from 'react';
import ResponsiveGrid from './components/responsive-grid/responsive-grid';
import './App.scss';

class App extends Component {
  render() {
    const url = 'https://images.pexels.com/photos/658687/pexels-photo-658687.jpeg?cs=srgb&dl=beautiful-bloom-blooming-658687.jpg&fm=jpg';
    const url2 = 'http://www.flowerglossary.com/wp-content/uploads/2017/09/balloon-flower.jpg';
    const url3 = 'http://b.static.trunity.net/files/299501_299600/299598/vertical-farming-chris-jacobs.jpg';
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
              screenWidth: 1024,
              gutterWidth: 30,
              gutterHeight: 30,
            },
            {
              columns: 4,
              screenWidth: 1920,
              gutterWidth: 20,
              gutterHeight: 20,
            },
          ]}>
            <img src={url} style={{ width: '100%', height: 'auto' }} alt='' />
            <img src={url2} style={{ width: '100%', height: 'auto' }} alt='' />
            <img src={url3} style={{ width: '100%', height: 'auto' }} alt='' />
            <img src={url} style={{ width: '100%', height: 'auto' }} alt='' />
            <img src={url2} style={{ width: '100%', height: 'auto' }} alt='' />
            <img src={url} style={{ width: '100%', height: 'auto' }} alt='' />
            <img src={url2} style={{ width: '100%', height: 'auto' }} alt='' />
            <img src={url3} style={{ width: '100%', height: 'auto' }} alt='' />
            <img src={url2} style={{ width: '100%', height: 'auto' }} alt='' />
            <img src={url3} style={{ width: '100%', height: 'auto' }} alt='' />
            <img src={url} style={{ width: '100%', height: 'auto' }} alt='' />
            <img src={url2} style={{ width: '100%', height: 'auto' }} alt='' />
            <img src={url3} style={{ width: '100%', height: 'auto' }} alt='' />
            <img src={url} style={{ width: '100%', height: 'auto' }} alt='' />
            <img src={url2} style={{ width: '100%', height: 'auto' }} alt='' />
            <img src={url} style={{ width: '100%', height: 'auto' }} alt='' />
            <img src={url2} style={{ width: '100%', height: 'auto' }} alt='' />
            <img src={url3} style={{ width: '100%', height: 'auto' }} alt='' />
            <img src={url2} style={{ width: '100%', height: 'auto' }} alt='' />
            <img src={url3} style={{ width: '100%', height: 'auto' }} alt='' />
            <img src={url} style={{ width: '100%', height: 'auto' }} alt='' />
            <img src={url2} style={{ width: '100%', height: 'auto' }} alt='' />
            <img src={url3} style={{ width: '100%', height: 'auto' }} alt='' />
            <img src={url} style={{ width: '100%', height: 'auto' }} alt='' />
            <img src={url2} style={{ width: '100%', height: 'auto' }} alt='' />
            <img src={url} style={{ width: '100%', height: 'auto' }} alt='' />
            <img src={url2} style={{ width: '100%', height: 'auto' }} alt='' />
            <img src={url3} style={{ width: '100%', height: 'auto' }} alt='' />
            <img src={url2} style={{ width: '100%', height: 'auto' }} alt='' />
            <img src={url3} style={{ width: '100%', height: 'auto' }} alt='' />
            <img src={url} style={{ width: '100%', height: 'auto' }} alt='' />
            <img src={url2} style={{ width: '100%', height: 'auto' }} alt='' />
            <img src={url3} style={{ width: '100%', height: 'auto' }} alt='' />
            <img src={url} style={{ width: '100%', height: 'auto' }} alt='' />
            <img src={url2} style={{ width: '100%', height: 'auto' }} alt='' />
            <img src={url} style={{ width: '100%', height: 'auto' }} alt='' />
            <img src={url2} style={{ width: '100%', height: 'auto' }} alt='' />
            <img src={url3} style={{ width: '100%', height: 'auto' }} alt='' />
            <img src={url2} style={{ width: '100%', height: 'auto' }} alt='' />
            <img src={url3} style={{ width: '100%', height: 'auto' }} alt='' />
            <img src={url} style={{ width: '100%', height: 'auto' }} alt='' />
            <img src={url2} style={{ width: '100%', height: 'auto' }} alt='' />
            <img src={url3} style={{ width: '100%', height: 'auto' }} alt='' />
            <img src={url} style={{ width: '100%', height: 'auto' }} alt='' />
            <img src={url2} style={{ width: '100%', height: 'auto' }} alt='' />
            <img src={url} style={{ width: '100%', height: 'auto' }} alt='' />
            <img src={url2} style={{ width: '100%', height: 'auto' }} alt='' />
            <img src={url3} style={{ width: '100%', height: 'auto' }} alt='' />
            <img src={url2} style={{ width: '100%', height: 'auto' }} alt='' />
            <img src={url3} style={{ width: '100%', height: 'auto' }} alt='' />
            <img src={url} style={{ width: '100%', height: 'auto' }} alt='' />
            <img src={url2} style={{ width: '100%', height: 'auto' }} alt='' />
            <img src={url3} style={{ width: '100%', height: 'auto' }} alt='' />
            <img src={url} style={{ width: '100%', height: 'auto' }} alt='' />
            <img src={url2} style={{ width: '100%', height: 'auto' }} alt='' />
            <img src={url} style={{ width: '100%', height: 'auto' }} alt='' />
            <img src={url2} style={{ width: '100%', height: 'auto' }} alt='' />
            <img src={url3} style={{ width: '100%', height: 'auto' }} alt='' />
            <img src={url2} style={{ width: '100%', height: 'auto' }} alt='' />
            <img src={url3} style={{ width: '100%', height: 'auto' }} alt='' />
            <img src={url3} style={{ width: '100%', height: 'auto' }} alt='' />
            <img src={url} style={{ width: '100%', height: 'auto' }} alt='' />
            <img src={url2} style={{ width: '100%', height: 'auto' }} alt='' />
            <img src={url} style={{ width: '100%', height: 'auto' }} alt='' />
            <img src={url2} style={{ width: '100%', height: 'auto' }} alt='' />
            <img src={url3} style={{ width: '100%', height: 'auto' }} alt='' />
            <img src={url2} style={{ width: '100%', height: 'auto' }} alt='' />
            <img src={url3} style={{ width: '100%', height: 'auto' }} alt='' />
            <img src={url} style={{ width: '100%', height: 'auto' }} alt='' />
            <img src={url2} style={{ width: '100%', height: 'auto' }} alt='' />
            <img src={url3} style={{ width: '100%', height: 'auto' }} alt='' />
            <img src={url} style={{ width: '100%', height: 'auto' }} alt='' />
            <img src={url2} style={{ width: '100%', height: 'auto' }} alt='' />
            <img src={url} style={{ width: '100%', height: 'auto' }} alt='' />
            <img src={url2} style={{ width: '100%', height: 'auto' }} alt='' />
            <img src={url3} style={{ width: '100%', height: 'auto' }} alt='' />
            <img src={url2} style={{ width: '100%', height: 'auto' }} alt='' />
            <img src={url3} style={{ width: '100%', height: 'auto' }} alt='' />
          </ResponsiveGrid>
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import ResponsiveGrid from './components/responsive-grid/responsive-grid';
import './App.scss';

class App extends Component {
  state = {
    items: [
      {
        url: 'http://eskipaper.com/images/beautiful-yellow-flowers-2.jpg',
        height: 205,
      },
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Flowers_of_india_16.jpg',
        height: 648,
      },
      {
        url: 'https://images4-b.ravelrycache.com/uploads/dunnica/328600413/01_Crocodile_Flower_small2.jpg',
        height: 320,
      },
      {
        url: 'http://eskipaper.com/images/beautiful-yellow-flowers-2.jpg',
        height: 205,
      },
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Flowers_of_india_16.jpg',
        height: 648,
      },
      {
        url: 'https://images4-b.ravelrycache.com/uploads/dunnica/328600413/01_Crocodile_Flower_small2.jpg',
        height: 320,
      },
      {
        url: 'http://eskipaper.com/images/beautiful-yellow-flowers-2.jpg',
        height: 205,
      },
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Flowers_of_india_16.jpg',
        height: 648,
      },
      {
        url: 'https://images4-b.ravelrycache.com/uploads/dunnica/328600413/01_Crocodile_Flower_small2.jpg',
        height: 320,
      },
      {
        url: 'http://eskipaper.com/images/beautiful-yellow-flowers-2.jpg',
        height: 205,
      },
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Flowers_of_india_16.jpg',
        height: 648,
      },
      {
        url: 'https://images4-b.ravelrycache.com/uploads/dunnica/328600413/01_Crocodile_Flower_small2.jpg',
        height: 320,
      },
      {
        url: 'http://eskipaper.com/images/beautiful-yellow-flowers-2.jpg',
        height: 205,
      },
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Flowers_of_india_16.jpg',
        height: 648,
      },
      {
        url: 'https://images4-b.ravelrycache.com/uploads/dunnica/328600413/01_Crocodile_Flower_small2.jpg',
        height: 320,
      },
      {
        url: 'http://eskipaper.com/images/beautiful-yellow-flowers-2.jpg',
        height: 205,
      },
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Flowers_of_india_16.jpg',
        height: 648,
      },
      {
        url: 'https://images4-b.ravelrycache.com/uploads/dunnica/328600413/01_Crocodile_Flower_small2.jpg',
        height: 320,
      },
      {
        url: 'https://images4-b.ravelrycache.com/uploads/dunnica/328600413/01_Crocodile_Flower_small2.jpg',
        height: 320,
      },
      {
        url: 'https://images4-b.ravelrycache.com/uploads/dunnica/328600413/01_Crocodile_Flower_small2.jpg',
        height: 320,
      },
      {
        url: 'https://images4-b.ravelrycache.com/uploads/dunnica/328600413/01_Crocodile_Flower_small2.jpg',
        height: 320,
      },
      {
        url: 'https://images4-b.ravelrycache.com/uploads/dunnica/328600413/01_Crocodile_Flower_small2.jpg',
        height: 320,
      },
    ]
  }

  renderImage (url, index, height) {
    return (
      <div className='image-container' height={height} key={index}>
        <img src={url} style={{ width: '100%', height: 'auto' }} alt='' />
        <div className='index'>{index}</div>
      </div>
    )
  }

  createItems () {
    return (
      this.state.items.map((item, index) => {
        return (
          this.renderImage(item.url, index, item.height)
        )
      })
    )
  }

  appendMore = () => {
    let items = [...this.state.items];
    const moreItems = [
      {
        url: 'http://eskipaper.com/images/beautiful-yellow-flowers-2.jpg',
        height: 205,
      },
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Flowers_of_india_16.jpg',
        height: 648,
      },
      {
        url: 'https://images4-b.ravelrycache.com/uploads/dunnica/328600413/01_Crocodile_Flower_small2.jpg',
        height: 320,
      },
      {
        url: 'http://eskipaper.com/images/beautiful-yellow-flowers-2.jpg',
        height: 205,
      },
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Flowers_of_india_16.jpg',
        height: 648,
      },
      {
        url: 'https://images4-b.ravelrycache.com/uploads/dunnica/328600413/01_Crocodile_Flower_small2.jpg',
        height: 320,
      },
      {
        url: 'http://eskipaper.com/images/beautiful-yellow-flowers-2.jpg',
        height: 205,
      },
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Flowers_of_india_16.jpg',
        height: 648,
      },
      {
        url: 'https://images4-b.ravelrycache.com/uploads/dunnica/328600413/01_Crocodile_Flower_small2.jpg',
        height: 320,
      },
      {
        url: 'http://eskipaper.com/images/beautiful-yellow-flowers-2.jpg',
        height: 205,
      },
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Flowers_of_india_16.jpg',
        height: 648,
      },
      {
        url: 'https://images4-b.ravelrycache.com/uploads/dunnica/328600413/01_Crocodile_Flower_small2.jpg',
        height: 320,
      },
      {
        url: 'http://eskipaper.com/images/beautiful-yellow-flowers-2.jpg',
        height: 205,
      },
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Flowers_of_india_16.jpg',
        height: 648,
      },
      {
        url: 'https://images4-b.ravelrycache.com/uploads/dunnica/328600413/01_Crocodile_Flower_small2.jpg',
        height: 320,
      },
      {
        url: 'http://eskipaper.com/images/beautiful-yellow-flowers-2.jpg',
        height: 205,
      },
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Flowers_of_india_16.jpg',
        height: 648,
      },
      {
        url: 'https://images4-b.ravelrycache.com/uploads/dunnica/328600413/01_Crocodile_Flower_small2.jpg',
        height: 320,
      },
      {
        url: 'https://images4-b.ravelrycache.com/uploads/dunnica/328600413/01_Crocodile_Flower_small2.jpg',
        height: 320,
      },
      {
        url: 'https://images4-b.ravelrycache.com/uploads/dunnica/328600413/01_Crocodile_Flower_small2.jpg',
        height: 320,
      },
      {
        url: 'https://images4-b.ravelrycache.com/uploads/dunnica/328600413/01_Crocodile_Flower_small2.jpg',
        height: 320,
      },
      {
        url: 'https://images4-b.ravelrycache.com/uploads/dunnica/328600413/01_Crocodile_Flower_small2.jpg',
        height: 320,
      },
      {
        url: 'https://images4-b.ravelrycache.com/uploads/dunnica/328600413/01_Crocodile_Flower_small2.jpg',
        height: 320,
      },
      {
        url: 'https://images4-b.ravelrycache.com/uploads/dunnica/328600413/01_Crocodile_Flower_small2.jpg',
        height: 320,
      },
      {
        url: 'https://images4-b.ravelrycache.com/uploads/dunnica/328600413/01_Crocodile_Flower_small2.jpg',
        height: 320,
      },
      
    ];
    items = [...items, ...moreItems];
    this.setState({
      items,
    });
  }

  render() {
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
            {this.createItems()}
          </ResponsiveGrid>
        </div>
        <button onClick={this.appendMore}>append</button>
      </div>
    );
  }
}

export default App;

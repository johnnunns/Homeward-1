import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Feed from './Feed';

const url = 'https://codesmith-precourse.firebaseio.com/instagram/-JqL35o8u6t3dTQaFXSV.json';

//App consists of one feed
class App extends Component {

  render() {
    return (
      <div styles={styles.container}>
        <Feed feedUrl={url}/>
      </div>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  }
};

// Render an <App> component to the #app div in the body
ReactDOM.render(<App />, document.getElementById('app'));
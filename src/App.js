import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav/Nav'
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Post from './components/Post/Post';
import routes from './routes'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* {this.props.location.pathname === '/' && <Nav />}  */}
        <Nav />
        {routes}
      </div>
    );
}
 
}

export default App;

import React, { Component } from 'react';
import { HeaderSection, SignInSection } from './components'
import './app.css'

class App extends Component {
  render() {
    const Divider = () => <hr className="divider" />;
    return (
      <div className="root-container">
        <div className="media-q-test">
          <HeaderSection />
          <Divider />
          <SignInSection />
          <Divider />
          <div className="footer">
            Footer
          </div>
        </div>
      </div>
    );
  }
}

export default App;

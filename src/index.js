import React from 'react';
import ReactDOM from 'react-dom';

import App from './app.js';
import { BrowserRouter } from 'react-router-dom';
import {SettingsProvider} from './contexts/settings';

class Main extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <SettingsProvider>
          <App />
        </SettingsProvider>
      </BrowserRouter>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);

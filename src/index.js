import React from 'react';
import ReactDOM from 'react-dom';

import App from './app.js';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './contexts/auth';

class Main extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <AuthProvider>
          <App />
        </AuthProvider>
      </BrowserRouter>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);

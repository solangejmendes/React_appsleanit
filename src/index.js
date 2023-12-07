import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';

import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'animate.css/animate.min.css';

// Translation of contents takes time. As a result, we wrap the app component within Suspense with fallback. Loading... will be shown on the screen until the translation is done.
      
ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
        <Suspense fallback={<div>Loading....</div>}> 
          <App />
        </Suspense>
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


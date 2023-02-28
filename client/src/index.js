import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css'

//toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Theme Provider
import { ThemeProvider } from 'styled-components';
import { Theme } from './styles/Theme';
//importing the global styles
import { GlobalStyle } from './styles/GlobalStyle';


//appProvider
import AppProvider from './context';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <AppProvider>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        className='tost'
      />
      <React.StrictMode>
        <ThemeProvider theme={Theme}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </React.StrictMode>
    </AppProvider>
  </BrowserRouter>
);




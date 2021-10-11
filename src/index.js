import React  from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Appwrite, {AppwriteContext} from './components/Appwrite';

ReactDOM.render(
  <React.StrictMode>
  <AppwriteContext.Provider value={new Appwrite()}>
    <App />
    </AppwriteContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // development modda yani geliştirme yaparken react tarafında kontrolü yazım denetimi yapmak hataları minimuma indirmek için kullanılan bir yöntem
  // production mode da çalışmıyor.
  // development modda açık olan bu element yüzünden component içerisindeki useEffect 2 kez tetikleniyor.
  //<React.StrictMode>
    <App />
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

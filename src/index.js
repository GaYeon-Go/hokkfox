import React from 'react'; //react라는 모듈을 가져오는데 React라는 이름으로 사용
import ReactDOM from 'react-dom/client';
import App from './App'; //App.js를 가져오는데 App이라는 이름으로 사용한다.

const root = ReactDOM.createRoot(document.getElementById('root')); //DOM에 root를 만든다. 
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// App 컴포넌트를 연결하라 (App.js를 컴포넌트로 사용)

// id root랑 app을 연결
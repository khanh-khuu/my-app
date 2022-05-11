import React from 'react';
import './App.css';

function App() {
  const logo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png';
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Sửa <code>src/App.tsx</code> và lưu để tải lại.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Học React JS trong 1 nốt nhạc
        </a>
      </header>
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { menuItems } from './router';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <div className='layout'>
          <aside className='side-menu'>
            <strong className='side-title'>Sample</strong>
            <ul>
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link to={item.path}>{item.path}</Link>
                </li>
              ))}
            </ul>
          </aside>
          <div className='content'>
            <Routes>
              {menuItems.map((item, index) => (
                <React.Fragment key={index}>
                  <Route path={item.path} element={item.content} />
                </React.Fragment>
              ))}
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

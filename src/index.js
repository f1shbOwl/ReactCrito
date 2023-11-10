import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './assets/scss/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './views/Home';
import Contacts from './views/Contacts';
import NotFound from './views/NotFound';
import ArticleNews from './views/News';
import NewsDetails from './views/NewsDetails';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Contacts' element={<Contacts />} />
        <Route path='/News' element={<ArticleNews />} />
        <Route path='/NewsDetails' element={<NewsDetails />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


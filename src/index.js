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
import AutoScrollToTop from './components/ScrollToTop/AutoScrollToTop';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <AutoScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Contacts' element={<Contacts />} />
        <Route path='/News' element={<ArticleNews />} />
        <Route path='/NewsDetails/:id' element={<NewsDetails />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AddRecipe from './components/AddRecipe';
import Home from './components/Home';
import BrowseRecipes from './components/BrowseRecipes';
import Recipe from './components/Recipe';
import Header from './components/Header';
import Layout from './components/Layout';


const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='browserecipes' element={<BrowseRecipes />} />
            <Route path='browserecipes/:singlerecipe' element={<Recipe />}  />
            <Route path='add' element={<AddRecipe />} />
          </Route>
        </Routes>

      </div>
      
      </BrowserRouter>
      
  );
}

export default App;

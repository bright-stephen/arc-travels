import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LayOut from './Pages/LayOut';
import Home from './Pages/Home';
import Blogs from './Pages/Blogs';
import BlogsDetails from './Pages/BlogsDetails';
import NoPage from './Pages/NoPage';
import About from './Pages/About';
import PlacesRoute from './Pages/PlacesRoute';
import Location from './Components/Location/Location';
import Services from './Pages/Services';
import TopBrands from './Pages/TopBrands';
import SignUp from './Pages/SignUp';
import LogIn from './Pages/LogIn';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route  path='/' element={<LayOut/>}>
            <Route index element={<Home/>}/>
            <Route path='/about/*' element={<About/>}/>
            <Route path='/blogs/*' element={<Blogs/>}/>
            <Route path='/blogs/:id/*' element={<BlogsDetails/>}/>
            <Route path='/Places/*' element={<PlacesRoute/>}/>
            <Route path='/location/*' element={<Location/>}/>
            <Route path='/services/*' element={<Services/>}/>
            <Route path='/topbrands/*' element={<TopBrands/>}/>
            <Route path='/signup/*' element={<SignUp/>}/>
            <Route path='/login/*' element={<LogIn/>}/>
            <Route path='*' element={<NoPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
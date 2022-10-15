import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BestStories from './Components/Header/BestStories';
import LatestStories from './Components/Header/LatestStories';
import TopStories from './Components/Header/TopStories';
import Navbar from './Components/Navbar';

class App extends Component {


  render() {

    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<TopStories/>}/>
          <Route path='/TopStories' element={<TopStories/>} />
          <Route path='/LatestStories' element={<LatestStories/>} />
          <Route path='/BestStories' element={<BestStories/>} />
        </Routes>
      </BrowserRouter>

    )

  }


}

export default App;
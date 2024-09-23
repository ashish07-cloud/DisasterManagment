import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Scrollingbar from './components/Scrollingbar/Scrollingbar';
import Searchbar from './components/Searchbar/Searchbar';
import Mainright from './components/Main/Mainright';
import Mainmap from './components/Main/Mainmap';




function App() {
  return (
    <div className='bg-gray-100'>
        <Navbar/>
        <Scrollingbar/>
        <Searchbar/>
        <Mainright/>
        <Mainmap/>

        
    </div>
    
  );
}

export default App;

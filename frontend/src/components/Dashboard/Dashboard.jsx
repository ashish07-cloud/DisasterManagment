import React from 'react'
import Navbar from './Navbar/Navbar'
import Scrollingbar from './Scrollingbar/Scrollingbar'
import Searchbar from './Searchbar/Searchbar'
import Mainright from './Main/Mainright'
import Mainmap from './Main/Mainmap'

const Dashboard = () => {
  return (
    <div>
        <Navbar/>
        <Scrollingbar/>
        <Searchbar/>
        <Mainright/>
        <Mainmap/>
    </div>
  )
}

export default Dashboard
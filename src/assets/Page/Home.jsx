import React from 'react'
import { Sidebar } from '../Components/sidebar'
import { Header } from '../Components/Header'
import { Outlet } from 'react-router'


const Home = () => {
  return (
    <div className='flex'>
     <div>
        <Sidebar/>
     </div>
     <div className='w-full '>
     <Header/>
     <Outlet/>
     </div>
    </div>
  )
}

export default Home
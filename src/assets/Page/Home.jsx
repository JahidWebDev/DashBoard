import React from 'react'
import { Sidebar } from '../Components/sidebar'
import { Header } from '../Components/sidebar'


const Home = () => {
  return (
    <div className='flex'>
     <div>
        <Sidebar/>
     </div>
     <div>
     <Header/>
     </div>
    </div>
  )
}

export default Home
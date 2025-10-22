import React from 'react'
import './home.css'
import Sidebar from '../../components/sidebar/sidebar'
import Feed from '../../components/feed/feed'


const Home = ({sidebar}) => {
  return (
    <>
      <Sidebar sidebar = {sidebar} />
      <div className={`container ${sidebar? "" : 'large-container'}`}>
        <Feed/>
      </div>
    </>
  )
}

export default Home
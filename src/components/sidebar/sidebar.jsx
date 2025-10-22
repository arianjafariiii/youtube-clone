import React from 'react'
import '../sidebar/sidebar.css'


import home from '../../assets/home.png';
import game_icon from '../../assets/game_icon.png';
import automobiles from '../../assets/automobiles.png';
import sports from '../../assets/sports.png';
import entertainment from '../../assets/entertainment.png';
import tech from '../../assets/tech.png';
import music from '../../assets/music.png';
import blogs from '../../assets/blogs.png';
import news from '../../assets/news.png';
import jack from '../../assets/jack.png';
import simon from '../../assets/simon.png';
import tom from '../../assets/tom.png';
import megan from '../../assets/megan.png';
import cameron from '../../assets/cameron.png';



const Sidebar = ({sidebar}) => {
  return (
    <div className={`sidebar ${sidebar?"":"small-sidebar" }`}>
        <div className='shortcut-links'>
            <div className='side-link'>
                <img src={home}/><p>Home</p>
            </div>
            <div className='side-link'>
                <img src={game_icon}/><p>Gaming</p>
            </div>
            <div className='side-link'>
                <img src={automobiles}/><p>Automobiles</p>
            </div>
            <div className='side-link'>
                <img src={sports}/><p>Sports</p>
            </div>
            <div className='side-link'>
                <img src={entertainment}/><p>Entertainment</p>
            </div>
            <div className='side-link'>
                <img src={tech}/><p>Technology</p>
            </div>
            <div className='side-link'>
                <img src={music}/><p>Music</p>
            </div>
            <div className='side-link'>
                <img src={blogs}/><p>Blogs</p>
            </div>
            <div className='side-link'>
                <img src={news}/><p>News</p>
            </div>
         
            <hr/>
        </div>
        <div className='subscribed-list'>
            <h3>Subscribed</h3>
                <div className='side-link'>
                    <img src={jack}/><p>Jack</p>
                </div>
                <div className='side-link'>
                    <img src={simon}/><p>Simon</p>
                </div>
                <div className='side-link'>
                    <img src={tom}/><p>Tom</p>
                </div>
                <div className='side-link'>
                    <img src={megan}/><p>Megan</p>
                </div>
                <div className='side-link'>
                    <img src={cameron}/><p>Cameron</p>
                </div>
            
        </div>
    </div>
  )
}

export default Sidebar
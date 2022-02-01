import logo from './img/logo.png';
import UserPhoto from './img/user-4.jpg';

import {ReactComponent as GlassIcon} from './img/SVG/magnifying-glass.svg';
import {ReactComponent as BookmarkIcon} from './img/SVG/bookmark.svg';
import {ReactComponent as ChatIcon} from './img/SVG/chat.svg';
import {ReactComponent as HomeIcon} from './img/SVG/home.svg';
import {ReactComponent as PlaneIcon} from './img/SVG/aircraft.svg';
import {ReactComponent as KeyIcon} from './img/SVG/key.svg';
import {ReactComponent as MapIcon} from './img/SVG/map.svg';

import './styles/main.scss';

function App() {
  return (
    <div className="App">
       <div className='container'>
         <header className='header'>
           <img src={logo} alt="trillo logo" className="logo"/>
           <form action='#' className='search'>
             <input type="text" className='search__input' placeholder='Search hotels'/>
             <button className='search__button'>
               <GlassIcon className='search__icon' />
             </button>
           </form>
           <nav className='user-nav'>
             <div className='user-nav__icon-box'>
               <BookmarkIcon className='user-nav__icon' />
               <span className='user-nav__notification'>7</span>
             </div>
             <div className='user-nav__icon-box'>
               <ChatIcon className='user-nav__icon' />
               <span className='user-nav__notification'>13</span>
             </div>
             <div className='user-nav__user'>
               <img src={UserPhoto} className='user-nav__user-photo'/>
               <span className='user-nav__user-name'>Yassine</span>
             </div>
           </nav>
         </header>
         <div className='content'>
           <nav className='sidebar'>
             <ul className='side-nav'>
                <li className='side-nav__item side-nav__item--active'>
                  <a href="#" className='side-nav__link'>
                    <HomeIcon className="side-nav__icon" />
                    <span>Hotel</span>
                  </a>
                </li>

                <li className='side-nav__item'>
                  <a href="#" className='side-nav__link'>
                    <PlaneIcon className="side-nav__icon" />
                    <span>Flight</span>
                  </a>
                </li>

                <li className='side-nav__item'>
                  <a href="#" className='side-nav__link'>
                    <KeyIcon className="side-nav__icon" />
                    <span>Car rental</span>
                  </a>
                </li>

                <li className='side-nav__item'>
                  <a href="#" className='side-nav__link'>
                    <MapIcon className="side-nav__icon" />
                    <span>Tours</span>
                  </a>
                </li>
             </ul>


             <div className='legal'>
               &copy; 2017 by trillo, All rights reserved
             </div>
           </nav>
           <main className='hotel-view'>
             Hotel View
           </main>
         </div>
       </div>
    </div>
  );
}

export default App;

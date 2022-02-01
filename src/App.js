import logo from './img/logo.png';
import UserPhoto from './img/user-4.jpg';

import Hotel1 from './img/hotel-1.jpg';
import Hotel2 from './img/hotel-2.jpg';
import Hotel3 from './img/hotel-3.jpg';

import {ReactComponent as GlassIcon} from './img/SVG/magnifying-glass.svg';
import {ReactComponent as BookmarkIcon} from './img/SVG/bookmark.svg';
import {ReactComponent as ChatIcon} from './img/SVG/chat.svg';
import {ReactComponent as HomeIcon} from './img/SVG/home.svg';
import {ReactComponent as PlaneIcon} from './img/SVG/aircraft.svg';
import {ReactComponent as KeyIcon} from './img/SVG/key.svg';
import {ReactComponent as MapIcon} from './img/SVG/map.svg';
import {ReactComponent as StarIcon} from './img/SVG/star.svg';
import {ReactComponent as LocationIcon} from './img/SVG/location-pin.svg';



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
             <div className='gallery'>
               <figure className='gallery__item'>
                 <img src={Hotel1} alt='' className='gallery__photo' />
               </figure>
               <figure className='gallery__item'>
                 <img src={Hotel2} alt='' className='gallery__photo' />
               </figure>
               <figure className='gallery__item'>
                 <img src={Hotel3} alt='' className='gallery__photo' />
               </figure>
             </div>

             <div className='overview'>
               <h1 className='overview__heading'>
                 Hotel Las Palmas
               </h1>
               <div className='overview__stars'>
                  <StarIcon className="overview__icon" />
                  <StarIcon className="overview__icon" />
                  <StarIcon className="overview__icon" />
                  <StarIcon className="overview__icon" />
                  <StarIcon className="overview__icon" />
               </div>

               <div className='overview__location'>
                  <LocationIcon className="overview__icon" />
                  <button className='btn-inline'>Albufeira, Portugal</button>
               </div>

               <div className='overview__rating'>
                 <div className='overview__rating--average'>8.6</div>
                 <div className='overview__rating--average'>467 votes</div>
               </div>
             </div>
           </main>
         </div>
       </div>
    </div>
  );
}

export default App;

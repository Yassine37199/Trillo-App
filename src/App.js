import logo from './img/logo.png';
import UserPhoto from './img/user-4.jpg';

import {ReactComponent as GlassIcon} from './img/SVG/magnifying-glass.svg';
import {ReactComponent as BookmarkIcon} from './img/SVG/bookmark.svg';
import {ReactComponent as ChatIcon} from './img/SVG/chat.svg';

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
             Navigation
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

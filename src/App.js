import logo from './logo.svg';
import './styles/main.scss';

function App() {
  return (
    <div className="App">
       <div className='container'>
         <header className='header'>
           Header Part
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

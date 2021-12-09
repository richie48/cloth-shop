import './App.css';
import HomeScreenImage from './Images/HomeScreenImage.jpg';

function App() {
  return (
    <div className='home'>
      <header className="App-header">
        <h4>{'Welcome to the cloth shop'.toUpperCase()}</h4>
        <p>Get the best deals</p>
      </header>

      <div className='navbar'>
        <hr/>
        <div className='navbar-components'>
        <h4>HOME</h4>
        <h4>SHOP</h4>
        <h4>ABOUT</h4>
        <h4>CONTACT</h4>
        <h4>LOGIN</h4>
        <h4>CART</h4>
        </div>
        <hr/>
      </div>

      <div className='flex flex-col items-center'>
        <img src={HomeScreenImage} alt='No display seen' className='img-relative'/>
        <div className='p-1 max-w-5 overflow-hidden img-absolute'> 
        <h4 className='text-center mt-3 font-medium'>TOP QUALITY</h4>
        <p className='mx-3 my-3'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <div className='my-3 mr-3 p-3 shop-button w-40'>SHOP NOW</div>
        </div>
      </div>

    </div>
  );
}

export default App;

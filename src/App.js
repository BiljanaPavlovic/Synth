import './App.css';
import Animals from './components/Animals';
import Piano from './components/Piano';
import Songs from './components/Songs';
import Vehicles from './components/Vehicles';

function App() {




  return (
    <div className="App">
      <div className="small-up-div">
        <div className='small'></div>
        <div className='small'></div>
        <div className='larg'></div>
        <div className='small'></div>
        <div className='small'></div>
        <div className='small'></div>
        <div className='larg'></div>
        <div className='larg'></div>
        <div className='small'></div>
        <div className='small'></div>
        <div className='larg'></div>
        <div className='small'></div>

      </div>
      <h1>Music box</h1>
      <div className="small-up-div" >
        <div className='small'></div>
        <div className='larg'></div>
        <div className='small'></div>
        <div className='small'></div>
        <div className='larg'></div>
        <div className='small'></div>
        <div className='larg'></div>
        <div className='small'></div>
        <div className='small'></div>
        <div className='larg'></div>
        <div className='small'></div>
        <div className='larg'></div>


      </div>
      <div className="glass">

        <Songs />
        <div className="sounds-div">
          <Vehicles />
          <Animals />
        </div>
        <Piano />
      </div>
      <div className="bubles-right">


      </div>

    </div>

  );
}

export default App;

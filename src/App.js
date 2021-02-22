import './App.css';
import Animals from './components/Animals';
import Piano from './components/Piano';
import Songs from './components/Songs';
import Vehicles from './components/Vehicles';

function App() {




  return (
    <div className="App">
      <div className="glass">

        <h1>sintisajzer</h1>
        <Songs />
        <Vehicles />
        <Animals />
        <Piano />
      </div>
      <div className='small'></div>
      <div className='small'></div>
      <div className='small'></div>
      <div className='small'></div>
      <div className='small'></div>
      <div className='larg'></div>
      <div className='larg'></div>
      <div className='larg'></div>

    </div>
  );
}

export default App;

import './App.css';
import Animals from './components/Animals';
import Footer from './components/Footer';
import Header from './components/Header';
import Piano from './components/Piano';
import Songs from './components/Songs';
import Vehicles from './components/Vehicles';

function App() {




  return (
    <div className="App">
      <Header />
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
      <Footer />
    </div>

  );
}

export default App;

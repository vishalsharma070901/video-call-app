import{Route,Routes} from 'react-router-dom'
import './App.css';
import Index from './Pages/Home/Index';
import Roompage from './room/Index';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/'element={<Index/>}/>
        <Route path='/room/:roomId'element={<Roompage/>}/>
      </Routes>
     
    </div>
  );
}

export default App;

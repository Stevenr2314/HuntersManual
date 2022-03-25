import Navbar from './Components/Navbar/NavBar.js';
import Monsters from './Components/Monsters/Monsters.jsx';
import Monster from './Components/Monster/Monster.jsx';
import { Route , Routes} from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/monsters' element={<Monsters />}>
          <Route exact path=':id' element={<Monster />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

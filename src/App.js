import Navbar from './Components/Navbar/NavBar.js';
import Monsters from './Components/Monsters/Monsters.jsx';
import Monster from './Components/Monsters/Monster/Monster.jsx';
import Items from './Components/Items/Items.js';
import { Route , Routes} from 'react-router-dom';
import Weapons from './Components/Weapons/Weapons.js';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/monsters' element={<Monsters />}>
          <Route exact path=':id' element={<Monster />} />
        </Route>
        <Route path='/items' element={<Items />} >
          {/* <Route exact path=':id' element={} /> */}
        </Route>
        <Route path='/weapons' element={<Weapons />} >
          {/* <Route exact path=':id' element={} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;

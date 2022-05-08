import Navbar from './Components/Navbar/NavBar.js';
import Monsters from './Components/Monsters/Monsters.jsx';
import Monster from './Components/Monsters/Monster/Monster.jsx';
import Items from './Components/Items/Items.js';
import { Route , Routes} from 'react-router-dom';
import Weapons from './Components/Weapons/Weapons.js';
import Lister from './Components/Lister/Lister.jsx';
import Home from './Components/Home.js';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/:category' element={<Lister />} />
      </Routes>
    </div>
  );
}

export default App;

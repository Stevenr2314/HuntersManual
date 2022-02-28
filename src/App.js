import Navbar from './Components/Navbar/NavBar.js';
import Monsters from './Components/Monsters/Monsters.jsx';
import { Route , Routes} from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/monsters' element={<Monsters />} />
      </Routes>
    </div>
  );
}

export default App;

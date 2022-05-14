import Navbar from './Components/Navbar/NavBar.js';
import { Route , Routes} from 'react-router-dom';
import Lister from './Components/Lister/Lister.jsx';
import ListItem from './Components/Lister/List-Item/ListItem.jsx';
import Home from './Components/Home.js';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/:category' element={<Lister />} />
        <Route exact path='/:category/:id' element={<ListItem />}/>
      </Routes>
    </div>
  );
}

export default App;

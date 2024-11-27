
import './App.css';
import {BrowserRouter as Router,Routes,Route,Link,NavLink} from 'react-router-dom';
import Login from './components/Login';
import Dasboard  from './components/Dashbord';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/' element={<Dasboard/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;

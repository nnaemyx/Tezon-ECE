import './App.css';
import { Route, Routes} from 'react-router-dom'
import Home from './routes/Home'
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import UserDashboard from './components/User-dashboard/UserDasboard';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/dash' element={<UserDashboard/>}/>
      </Routes>
    </>
  );
}

export default App;

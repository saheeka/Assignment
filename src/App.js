
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Topbar from './Components/Topbar/Topbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Homepage/Home';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Orderlist from './Pages/Orderlist/Orderlist';
import Addorder from './Pages/Addorder/Addorder';


function App() {
  return (
    <Router>
    <div className="contain">
    <Sidebar />
      <div className="others"> 
      <Topbar/>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/orderlist" element={<Orderlist/>} />
      <Route path="/addorder" element={<Addorder/>} />
      </Routes>
     
     
      </div>
    

    </div></Router>
  );
}

export default App;

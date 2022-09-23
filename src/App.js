import './App.css';
import Board from './component/board/board';
import Login from './page/login/login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './page/dashboard/dashboard';
import GreenHouse from './page/greenhouse/greenhouse';
import Monitoring from './page/monitoring/monitoring';
import Controlling from './page/controlling/controlling';
import Notification from './page/notification/notification';
import GreenhouseAdd from './page/greenhouse/greenhouse_add';
import GreenhouseEdit from './page/greenhouse/greenhouse_edit';
import Monitoring_Add from './page/monitoring/monitoring_add';
import Controlling_Add from './page/controlling/controlling_add';

function App() {
  return (
      <Routes>
          <Route path="/"  element={<Login />} />
          <Route path="/unit"element={<Board />} >
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="greenhouse" element={<GreenHouse />} />
                <Route path="/monitoring" element={<Monitoring />} />
                <Route path="/controlling" element={<Controlling />} />
                <Route path="/unit/historynotifikasi" element={<Notification />} />
                <Route path="/unit/greenhouse/add" element={<GreenhouseAdd />} />
                <Route path="/unit/greenhouse/:slug" element={<GreenhouseEdit />} />
                <Route path="/unit/monitoring/add" element={<Monitoring_Add />} />
                <Route path="/unit/controlling/add" element={<Controlling_Add />} />
          </Route>
      </Routes>
    
  );
}

export default App;

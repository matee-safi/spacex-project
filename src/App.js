import { Routes, Route } from 'react-router-dom';
import View from './components/View';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import MyProfile from './components/MyProfile';
import NoMatch from './components/NoMatch';
import './App.css';

const App = () => (
  <Routes>
    <Route path="/" element={<View />}>
      <Route index element={<Rockets />} />
      <Route path="missions" element={<Missions />} />
      <Route path="my-profile" element={<MyProfile />} />
      <Route path="*" element={<NoMatch />} />
    </Route>
  </Routes>
);

export default App;

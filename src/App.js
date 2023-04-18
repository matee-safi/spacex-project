import { Routes, Route } from 'react-router-dom';
import View from './components/View';
import './App.css';

const App = () => (
  <Routes>
    <Route path="/" element={<View />}>
      <Route index element={<h1>rockets</h1>} />
      <Route path="missions" element={<h1>missions</h1>} />
      <Route path="my-profile" element={<h1>my profile</h1>} />
      <Route path="*" element={<h1>no match</h1>} />
    </Route>
  </Routes>
);

export default App;

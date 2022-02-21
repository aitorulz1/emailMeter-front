import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Register from './components/Auth/Register'
import Login from './components/Auth/Login'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

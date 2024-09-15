import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Register from './pages/Register';


const App = () => {
  return (
    <Router>
      <div>
        <header>
          <nav>
           
            <Link to="/register">Register</Link>
          </nav>
        </header>

        <main>
          <Routes>
            
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;

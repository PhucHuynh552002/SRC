import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/authen/Login';
import ProjectDS from './pages/Dashboard/Dashboard';
import Home from './pages/home/Home';
import Cookies from './pages/cookies/Cookies';
import Tool from './pages/tool/Tool';
import { AuthProvider } from './context/AuthContext';
import Error from './pages/error/error';
import { ToolProvider } from './context/ProfileContext';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ToolProvider>
          <Routes>
            {/* Login */}
            <Route path='/login' element={<Login />} />

            {/*  */}
              <Route path='/' element={<ProjectDS />} />
              <Route path='/home' element={<Home />} />

              <Route path='/dashboard' element={<ProjectDS />} />
              <Route path='/tool' element={<Tool />} />
              <Route path='/cookies' element={<Cookies />} />
            <Route path='/error' element={<Error />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </ToolProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

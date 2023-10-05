import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import Pagenotfound from './pages/Pagenotfound';
import Privecy from './pages/Privecy';
import MyCourse from './pages/MyCourse';
import Profile from './pages/Profile';
import { Toaster } from "react-hot-toast";
import ProtectedRoute from './components/Routes/protectedRoute';
import PublicRoute from './components/Routes/publicRoute';
import HomeInstructor from './pages/instructor/HomeInstructor';
import ApplyInstructor from './pages/instructor/ApplyInstructor';

function App() {
  return (
    <>
    <Toaster/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />
        <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
        <Route path="/mycourse" element={<ProtectedRoute><MyCourse/></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><Profile/></ProtectedRoute>} />
        <Route path="/homeinstructor" element={<HomeInstructor/>} />
        <Route path="/applyinstructor" element={<ProtectedRoute><ApplyInstructor/></ProtectedRoute>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privecy" element={<Privecy />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </>
  );
}

export default App;

import { Toaster } from 'react-hot-toast';
import './App.css';
import Home from './Pages/Home/Home.jsx';
import NotFound from './Pages/Notfound/Notfound.jsx';
import Success from './Pages/Success/Success.jsx';
import {BrowserRouter as Router, Route,  Routes} from "react-router-dom"

function App() {

  return (
  <>
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/success" element={<Success />} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
  </Router>
  <Toaster position='top-right'/>
  </>
  )
}

export default App

import Nav from "./nav-routes/Nav";
import { BrowserRouter as Router } from "react-router-dom"
import './App.css'
import AppRoutes from './nav-routes/AppRoutes';

function App() {

  return (
    <>
      <Router>
        <Nav />
        <AppRoutes />
      </Router> 
    </>
  )
}

export default App

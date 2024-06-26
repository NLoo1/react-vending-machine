import { BrowserRouter, Route, Routes, Link, Navigate } from "react-router-dom"
import {Candy, Chips, Cookies} from './RoutesList'
import './VendingMachine.css'

function VendingMachine() {
  return (
    <div className="VendingMachine">
        <BrowserRouter>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/chips'>Chips</Link>
          <Link to='/candy'>Candy</Link>
          <Link to='/cookies'>Cookies</Link>
        </nav>
        <Routes>
          <Route path="/chips" element={<Chips />}/>
          <Route path="/candy" element={<Candy />}/>
          <Route path="/cookies" element={<Cookies />}/>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default VendingMachine;

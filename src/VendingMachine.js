import { BrowserRouter, Route, Routes, Link, Navigate } from "react-router-dom"
import {Candy, Chips, Cookies} from './RoutesList'
import './VendingMachine.css'

function VendingMachine() {
  return (
    <div className="VendingMachine">
        <BrowserRouter>
        <nav>
          {window.location.pathname !=='/' && 
          <Link to='/'>Home</Link>
          }
          {window.location.pathname !=='/chips' && 
          <Link to='/chips'>Chips</Link>
          }
          {window.location.pathname !=='/candy' && 
          <Link to='/candy'>Candy</Link>
          }
          {window.location.pathname !=='/cookies' && 
          <Link to='/cookies'>Cookies</Link>
          }
          {/* <Link to='/chips'>Chips</Link> */}
          {/* <Link to='/candy'>Candy</Link> */}
          {/* <Link to='/cookies'>Cookies</Link> */}
        </nav>
        {window.location.pathname == '/' &&
        <h1>Choose a snack</h1>}
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

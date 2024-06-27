import { Route, Routes, Link, Navigate, useLocation } from "react-router-dom";
import { Candy, Chips, Cookies } from './RoutesList';
import './VendingMachine.css';

function VendingMachine() {
  const location = useLocation();

  return (
    <div className="VendingMachine">
      <nav>
        {location.pathname !== '/' && 
          <Link to='/'>Home</Link>
        }
        {location.pathname !== '/chips' && 
          <Link to='/chips'>Chips</Link>
        }
        {location.pathname !== '/candy' && 
          <Link to='/candy'>Candy</Link>
        }
        {location.pathname !== '/cookies' && 
          <Link to='/cookies'>Cookies</Link>
        }
      </nav>
      {location.pathname === '/' &&
        <h1>Choose a snack</h1>}
      <Routes>
        <Route path="/chips" element={<Chips />} />
        <Route path="/candy" element={<Candy />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default VendingMachine
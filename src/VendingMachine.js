import { BrowserRouter, Route, Switch, Link } from "react-router-dom"
import {Candy, Chips, Cookies} from './RoutesList'

function VendingMachine() {
  return (
    <div className="VendingMachine">
        <BrowserRouter>
        <nav>
          <Link to='/chips'>Chips</Link>
          <Link to='/candy'>Candy</Link>
          <Link to='/cookies'>Cookies</Link>

        </nav>

        <Switch>
          <Route path="/chips" element={<Chips />}/>
          <Route path="/candy" element={<Candy />}/>
          <Route path="/cookies" element={<Cookies />}/>
        </Switch>
        </BrowserRouter>
    </div>
  );
}

export default VendingMachine;

import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

function VendingMachine() {
  return (
    <div className="VendingMachine">
        <BrowserRouter>
        <Routes>
          <Route path="/food/:name" element={<Food/>} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default VendingMachine;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Customer from "./view/Customer/Customerall.js";
import Login from "./view/login/login.js";
// import Register from "./view/register.js";

function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter>
        <Routes>
          <Route path="/Customer" element={<Customer />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/register" element={<Register />} /> */}
          {/* <Route path="/test" element={<QueryStringTest />} />

          <Route path="/tv" element={<Tv />} />
          <Route path="/person" element={<Celebrity />} />
          <Route path="/*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

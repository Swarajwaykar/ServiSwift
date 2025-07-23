import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* Placeholder routes */}
      <Route path="/booking" element={<div>Booking Page</div>} />
      <Route path="/payment" element={<div>Payment Page</div>} />
      <Route path="/services" element={<div>Services Page</div>} />
      <Route path="/login" element={<div>Login Page</div>} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;

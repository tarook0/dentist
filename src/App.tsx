import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Home } from "./pages/Home";
import { Reservations } from "./pages/Reservations";
import { DashboardLayout } from "./layouts/DashbaordLayout";


const App: React.FC = () => {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/reservations" element={<Reservations />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
};

export default App;
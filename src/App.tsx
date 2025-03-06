import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Reservations } from "./pages/Reservations";
import { DashboardLayout } from "./layouts/DashbaordLayout";


const App: React.FC = () => {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<Reservations />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
};

export default App;
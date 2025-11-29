import Portfolio from "./Components/Portfolio"

import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      
      <Route path="*" element={<h1>404 - Page Not Found</h1>} />
    </Routes>
  );
}

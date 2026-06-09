import { BrowserRouter, Routes, Route } from "react-router-dom";

import Engagements from "./pages/Engagements";
import Sports from "./pages/Sports";
import Portraits from "./pages/Portraits";
import Branding from "./pages/Branding";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/engagements" element={<Engagements />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/portraits" element={<Portraits />} />
        <Route path="/branding" element={<Branding />} />
      </Routes>
    </BrowserRouter>
  );
}
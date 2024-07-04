import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "../nav/NavBar";
import { Home } from "../../pages/Home";
import Footer from "../nav/Footer";

function AppRouter() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-200">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default AppRouter;

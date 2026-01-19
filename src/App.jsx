import React, { useLayoutEffect } from "react";
import Home from "./components/pages/Home";
import PrivacyPolicy from "./components/privacypolicy/PrivacyPolicy";
import {
  Routes,
  Route,
  BrowserRouter as Router,
  useLocation,
} from "react-router-dom";

const Wrapper = ({ children }) => {
  const location = useLocation();

  useLayoutEffect(() => {
    // Scroll to the top of the page when the route changes
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  return children;
};

function App() {
  return (
    <Router>
      <Wrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/polityka-prywatnosci" element={<PrivacyPolicy />} />
        </Routes>
      </Wrapper>
    </Router>
  );
}

export default App;

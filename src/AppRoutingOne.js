import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import HomePage from "./pages/home/HomePage";
import NotFoundPage from "./pages/404/NotFoundPage";
import AboutPage from "./pages/about-faqs/AboutPage";

function AppRoutingOne() {
  return (
    <Router>
      <div>
        <aside>
          <Link to="/">|| HOME |</Link>
          <Link to="/about">| ABOUT |</Link>
          <Link to="/faqs">| FAQs ||</Link>
          <Link to="/una404">| This route does not exist ||</Link>
        </aside>

        <main>
          <Routes>
            <Route exact path="/" element={<HomePage />} />

            {["/about", "/faqs"].map((path) => (
              <Route path={path} element={<AboutPage />} />
            ))}

            {/* 404 Page not found */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default AppRoutingOne;

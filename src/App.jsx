import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import BetaTestPage from './pages/BetaTestPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/beta-test" element={<BetaTestPage />} />
      </Routes>
    </Router>
  );
}

export default App;

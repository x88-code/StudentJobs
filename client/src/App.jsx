import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BrowseJobs from './pages/BrowseJobs';
import PostJob from './pages/PostJob';
import Dashboard from './pages/Dashboard';
import FundiLogin from './pages/ProfessionalLogin';
import FundiRegister from './pages/ProfessionalRegister';
import FundiDashboard from './pages/ProfessionalDashboard';
import BookFundi from './pages/BookProfessional';

function App() {
  return (
    <Router>
      <Routes>
        {/* Student Job Marketplace Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/browse-jobs" element={<BrowseJobs />} />
        <Route path="/post-job" element={<PostJob />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Professional Routes */}
        <Route path="/professional-login" element={<FundiLogin />} />
        <Route path="/professional-register" element={<FundiRegister />} />
        <Route path="/professional-dashboard" element={<FundiDashboard />} />
        <Route path="/book/:fundiId" element={<BookFundi />} />
      </Routes>
    </Router>
  );
}

export default App;

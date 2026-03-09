import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Page Components (Matching your Tree exactly)
import Home from './pages/Home';
import BrowseJobs from './pages/BrowseJobs';
import PostJob from './pages/PostJob';
import Dashboard from './pages/Dashboard';
import ProfessionalLogin from './pages/ProfessionalLogin';
import ProfessionalRegister from './pages/ProfessionalRegister';
import ProfessionalDashboard from './pages/ProfessionalDashboard';
import BookProfessional from './pages/BookProfessional';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar /> {/* Added Navbar here so it shows on all pages */}
        
        <main className="flex-grow">
          <Routes>
            {/* Student Job Marketplace Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/browse-jobs" element={<BrowseJobs />} />
            <Route path="/post-job" element={<PostJob />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/professional-login" element={<ProfessionalLogin />} />
            <Route path="/professional-register" element={<ProfessionalRegister />} />
            <Route path="/professional-dashboard" element={<ProfessionalDashboard />} />
            <Route path="/book/:fundiId" element={<BookProfessional />} />
          </Routes>
        </main>

        <Footer /> {/* Added Footer here so it shows on all pages */}
      </div>
    </Router>
  );
}

export default App;

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { jobApi } from '../api/jobApi';
import Navbar from '../components/Navbar';
import JobCard from '../components/JobCard';
import CategoryCard from '../components/CategoryCard';
import Footer from '../components/Footer';

const CATEGORIES = [
  { name: 'Design', icon: '🎨', color: 'from-pink-100 to-rose-100' },
  { name: 'Coding', icon: '💻', color: 'from-blue-100 to-cyan-100' },
  { name: 'Writing', icon: '✍️', color: 'from-purple-100 to-indigo-100' },
  { name: 'Assignments', icon: '📚', color: 'from-yellow-100 to-orange-100' },
  { name: 'Data Entry', icon: '📊', color: 'from-emerald-100 to-teal-100' },
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [featuredJobs, setFeaturedJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedJobs = async () => {
      try {
        const response = await jobApi.getJobs();
        // Get the 6 most recent jobs as featured
        setFeaturedJobs(response.data.slice(0, 6));
      } catch (err) {
        console.error('Failed to fetch featured jobs:', err);
        setFeaturedJobs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedJobs();
  }, []);

  const handleApply = (jobId) => {
    alert(`Applied to job ${jobId}!`);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <div className="relative pt-24 pb-16 overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 hero-gradient opacity-90"></div>

        {/* Floating decorative elements */}
        <div className="absolute top-10 left-5 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-10 right-10 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-56 h-56 bg-pink-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Headline Section */}
          <div className="text-center space-y-6 animate-slide-up">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-4">
              <span className="text-sm font-semibold text-white">✨ Join 10,000+ Student Freelancers</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight text-white">
              Unlock Your
              <br />
              <span className="gradient-text">Earning Potential</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed font-light">
              Connect with fellow students. Complete meaningful tasks, earn real money, and build your professional portfolio. Direct payments, no middleman.
            </p>


            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                to="/browse-jobs"
                className="btn-primary-gradient"
              >
                🔍 Browse Jobs
              </Link>
              <Link
                to="/post-job"
                className="btn-primary border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold"
              >
                ✍️ Post Your Job
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900">Browse by Category</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-light">Discover opportunities in your field of expertise</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {CATEGORIES.map((category, idx) => (
              <div key={category.name} style={{animationDelay: `${idx * 0.1}s`}} className="animate-slide-up">
                <CategoryCard category={category} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Jobs Section */}
      <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-6">
            <div className="space-y-2">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900">Featured Opportunities</h2>
              <p className="text-lg text-gray-600 font-light">Handpicked jobs waiting for you right now</p>
            </div>
            <Link to="/browse-jobs" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors text-lg flex items-center gap-2 group">
              View All
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loading ? (
              // Loading skeleton
              Array.from({ length: 6 }).map((_, idx) => (
                <div key={idx} className="bg-white border border-gray-200 rounded-2xl p-6 animate-pulse">
                  <div className="h-4 bg-gray-200 rounded mb-4"></div>
                  <div className="h-3 bg-gray-200 rounded mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-3/4 mb-4"></div>
                  <div className="h-6 bg-gray-200 rounded mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
              ))
            ) : featuredJobs.length === 0 ? (
              <div className="col-span-full text-center py-20">
                <div className="text-6xl mb-4">📋</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">No jobs available</h3>
                <p className="text-gray-600 mb-6">Be the first to post a job!</p>
                <Link to="/post-job" className="px-6 py-2.5 bg-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                  Post a Job
                </Link>
              </div>
            ) : (
              featuredJobs.map((job, idx) => (
                <div key={job._id} style={{animationDelay: `${idx * 0.1}s`}} className="animate-slide-up">
                  <JobCard job={job} onApply={handleApply} />
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900">How It Works</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-light">Get started in just a few simple steps</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                step: '01',
                title: 'Browse & Explore',
                description: 'Search through available jobs posted by other students. Filter by category, budget, skills, and deadline to find your perfect match.',
                icon: '🔍',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                step: '02',
                title: 'Submit & Compete',
                description: 'Apply to jobs with a compelling proposal. Showcase your skills and why you are the best fit for the job.',
                icon: '📝',
                color: 'from-purple-500 to-pink-500'
              },
              {
                step: '03',
                title: 'Deliver & Earn',
                description: 'Once selected, complete the task with excellence. Get paid directly to your account and build your reputation.',
                icon: '💰',
                color: 'from-green-500 to-emerald-500'
              },
            ].map((item, idx) => (
              <div key={item.step} style={{animationDelay: `${idx * 0.1}s`}} className="animate-slide-up">
                <div className="relative h-full">
                  <div className="absolute -inset-1 bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                  <div className="relative bg-white rounded-2xl p-8 space-y-6 border border-gray-100 hover:border-gray-200 transition-all duration-300 h-full group">
                    {/* Step number */}
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${item.color} rounded-xl text-white text-2xl font-black`}>
                      {item.step}
                    </div>

                    {/* Icon */}
                    <div className="text-5xl">{item.icon}</div>

                    {/* Content */}
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed font-light">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-rose-600 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 hero-gradient opacity-50"></div>

        {/* Floating elements */}
        <div className="absolute top-10 left-5 w-80 h-80 bg-white/10 rounded-full blur-4xl animate-float"></div>
        <div className="absolute -bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-4xl animate-float" style={{animationDelay: '1s'}}></div>

        <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">Ready to Earn Today?</h2>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto font-light">
            Join thousands of students earning real money on their terms. Start browsing opportunities or post your first job in minutes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              to="/browse-jobs"
              className="btn-primary bg-white text-blue-600 font-bold hover:bg-gray-50"
            >
              Browse Opportunities
            </Link>
            <Link
              to="/post-job"
              className="btn-primary border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold"
            >
              Post Your First Job
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}


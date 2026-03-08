import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import JobCard from '../components/JobCard';
import Footer from '../components/Footer';

// Mock data for featured jobs
const FEATURED_JOBS = [
  {
    id: 1,
    title: 'Write a 2000 word essay on Climate Change',
    description: 'Need an essay on climate change for my environmental science class. Due next week.',
    budget: 45,
    category: 'Writing',
    postedAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
    deadline: '2024-03-15',
    applicants: 8,
  },
  {
    id: 2,
    title: 'Build a React Todo App',
    description: 'Need a functional React component with add, delete, and complete tasks features.',
    budget: 60,
    category: 'Coding',
    postedAt: new Date(Date.now() - 4 * 60 * 60 * 1000),
    deadline: '2024-03-12',
    applicants: 12,
  },
  {
    id: 3,
    title: 'UI Design for Student Portfolio Website',
    description: 'Create mockups and design for a modern portfolio website.',
    budget: 75,
    category: 'Design',
    postedAt: new Date(Date.now() - 1 * 60 * 60 * 1000),
    deadline: '2024-03-20',
    applicants: 5,
  },
  {
    id: 4,
    title: 'Data Entry - Customer Database',
    description: 'Enter 500 customer records from spreadsheets into system.',
    budget: 35,
    category: 'Data Entry',
    postedAt: new Date(Date.now() - 6 * 60 * 60 * 1000),
    deadline: '2024-03-10',
    applicants: 15,
  },
  {
    id: 5,
    title: 'Help with Physics Assignment',
    description: 'Need help understanding and solving 10 physics problems.',
    budget: 40,
    category: 'Assignments',
    postedAt: new Date(Date.now() - 3 * 60 * 60 * 1000),
    deadline: '2024-03-09',
    applicants: 6,
  },
  {
    id: 6,
    title: 'Logo Design for Student Club',
    description: 'Design a modern logo for our programming club.',
    budget: 55,
    category: 'Design',
    postedAt: new Date(Date.now() - 5 * 60 * 60 * 1000),
    deadline: '2024-03-18',
    applicants: 9,
  },
];

const CATEGORIES = [
  { name: 'Design', icon: '🎨', color: 'from-pink-100 to-rose-100' },
  { name: 'Coding', icon: '💻', color: 'from-blue-100 to-cyan-100' },
  { name: 'Writing', icon: '✍️', color: 'from-purple-100 to-indigo-100' },
  { name: 'Assignments', icon: '📚', color: 'from-yellow-100 to-orange-100' },
  { name: 'Data Entry', icon: '📊', color: 'from-emerald-100 to-teal-100' },
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleApply = (jobId) => {
    alert(`Applied to job ${jobId}!`);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <div className="relative pt-32 pb-24 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-10 w-80 h-80 bg-purple-100/40 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Headline */}
          <div className="text-center mb-12">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 leading-tight">
              Earn Money by
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Helping Other Students
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
              Connect with fellow students. Complete tasks, earn money, gain experience. No middleman, direct payments.
            </p>

            {/* Search Bar */}
            <div className="flex gap-3 max-w-2xl mx-auto mb-8 flex-col sm:flex-row">
              <input
                type="text"
                placeholder="Search jobs by title or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-6 py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900"
              />
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 whitespace-nowrap">
                Search
              </button>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                to="/browse-jobs"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
              >
                🔍 Browse Jobs Now
              </Link>
              <Link
                to="/post-job"
                className="px-8 py-4 border-2 border-gray-300 text-gray-900 rounded-lg font-bold hover:border-blue-600 hover:text-blue-600 transition-all duration-300 text-lg"
              >
                ✍️ Post Your First Job
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Popular Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {CATEGORIES.map((category) => (
              <Link
                key={category.name}
                to="/browse-jobs"
                className={`p-8 rounded-xl bg-gradient-to-br ${category.color} hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center group`}
              >
                <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="font-bold text-gray-900">{category.name}</h3>
                <p className="text-sm text-gray-600 mt-2">Browse {category.name} jobs</p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Jobs Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Featured Jobs</h2>
            <Link to="/browse-jobs" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURED_JOBS.map((job) => (
              <JobCard key={job.id} job={job} onApply={handleApply} />
            ))}
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                step: '1',
                title: 'Browse Jobs',
                description: 'Search through available jobs posted by other students. Filter by category, budget, and deadline.',
                icon: '🔍',
              },
              {
                step: '2',
                title: 'Apply & Get Selected',
                description: 'Submit your application and wait for the job poster to review your profile and choose you.',
                icon: '📝',
              },
              {
                step: '3',
                title: 'Complete & Get Paid',
                description: 'Complete the task and receive payment directly to your account. Build your reputation over time.',
                icon: '💰',
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="text-5xl mb-4 inline-block">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Earning?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of students who are earning money by helping others.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              to="/browse-jobs"
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-bold hover:shadow-lg transition-all duration-300"
            >
              Browse Jobs Now
            </Link>
            <Link
              to="/post-job"
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Post a Job
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const POSTED_JOBS = [
  {
    id: 1,
    title: 'Write a 2000 word essay on Climate Change',
    budget: 45,
    category: 'Writing',
    status: 'active',
    applicants: 8,
    postedDate: '2024-03-08',
    deadline: '2024-03-15',
  },
  {
    id: 2,
    title: 'Build a React Todo App',
    budget: 60,
    category: 'Coding',
    status: 'active',
    applicants: 12,
    postedDate: '2024-03-06',
    deadline: '2024-03-12',
  },
  {
    id: 3,
    title: 'UI Design for Portfolio Website',
    budget: 75,
    category: 'Design',
    status: 'completed',
    applicants: 5,
    postedDate: '2024-02-28',
    deadline: '2024-03-05',
  },
];

const APPLIED_JOBS = [
  {
    id: 101,
    title: 'Data Entry - Customer Database',
    budget: 35,
    category: 'Data Entry',
    status: 'pending',
    postedBy: 'John S.',
    appliedDate: '2024-03-07',
    deadline: '2024-03-10',
  },
  {
    id: 102,
    title: 'Help with Physics Assignment',
    budget: 40,
    category: 'Assignments',
    status: 'accepted',
    postedBy: 'Sarah P.',
    appliedDate: '2024-03-05',
    deadline: '2024-03-09',
  },
  {
    id: 103,
    title: 'Logo Design for Student Club',
    budget: 55,
    category: 'Design',
    status: 'rejected',
    postedBy: 'Mike T.',
    appliedDate: '2024-03-04',
    deadline: '2024-03-18',
  },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('posted');
  const [userProfile] = useState({
    name: 'Erick Kirui',
    email: 'erick@student.it',
    profileImage: '👤',
    rating: 4.8,
    totalJobs: 12,
    totalEarnings: 450,
    joinDate: 'January 2024',
  });

  const getStatusBadge = (status) => {
    const styles = {
      active: 'bg-green-100 text-green-800',
      completed: 'bg-blue-100 text-blue-800',
      pending: 'bg-yellow-100 text-yellow-800',
      accepted: 'bg-green-100 text-green-800',
      rejected: 'bg-red-100 text-red-800',
    };
    return styles[status] || 'bg-gray-100 text-gray-800';
  };

  const getStatusLabel = (status) => {
    const labels = {
      active: 'Active',
      completed: 'Completed',
      pending: 'Pending',
      accepted: 'Accepted',
      rejected: 'Rejected',
    };
    return labels[status] || status;
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Header */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 border-b border-gray-200 pt-28 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">My Dashboard</h1>
          <p className="text-lg text-gray-600">Manage your jobs and applications</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Profile Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Profile Info */}
            <div className="md:col-span-2">
              <div className="flex items-start gap-4">
                <div className="text-6xl">{userProfile.profileImage}</div>
                <div>
                  <h2 className="text-2xl font-bold mb-1">{userProfile.name}</h2>
                  <p className="opacity-90 mb-3">{userProfile.email}</p>
                  <p className="text-sm opacity-75">Member since {userProfile.joinDate}</p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="md:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-6">
              <div>
                <p className="text-sm opacity-90 mb-1">Rating</p>
                <p className="text-3xl font-bold">
                  {userProfile.rating}⭐
                </p>
              </div>
              <div>
                <p className="text-sm opacity-90 mb-1">Jobs Completed</p>
                <p className="text-3xl font-bold">{userProfile.totalJobs}</p>
              </div>
              <div>
                <p className="text-sm opacity-90 mb-1">Total Earnings</p>
                <p className="text-3xl font-bold">${userProfile.totalEarnings}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <div className="flex gap-8">
            <button
              onClick={() => setActiveTab('posted')}
              className={`pb-4 font-semibold border-b-2 transition-all duration-300 ${
                activeTab === 'posted'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              📝 Jobs I Posted ({POSTED_JOBS.length})
            </button>
            <button
              onClick={() => setActiveTab('applied')}
              className={`pb-4 font-semibold border-b-2 transition-all duration-300 ${
                activeTab === 'applied'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              ✅ Jobs I Applied For ({APPLIED_JOBS.length})
            </button>
          </div>
        </div>

        {/* Jobs I Posted */}
        {activeTab === 'posted' && (
          <div>
            {POSTED_JOBS.length === 0 ? (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">📋</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">No jobs posted yet</h3>
                <p className="text-gray-600 mb-6">Start earning by posting your first job</p>
                <a
                  href="/post-job"
                  className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-bold hover:shadow-lg transition-all duration-300"
                >
                  Post Your First Job
                </a>
              </div>
            ) : (
              <div className="space-y-4">
                {POSTED_JOBS.map((job) => (
                  <div
                    key={job.id}
                    className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-bold text-gray-900">{job.title}</h3>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusBadge(job.status)}`}>
                            {getStatusLabel(job.status)}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                          <span>📁 {job.category}</span>
                          <span>👥 {job.applicants} applicants</span>
                          <span>📅 Deadline: {job.deadline}</span>
                          <span>💰 Ksh{job.budget}</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button className="px-4 py-2 border border-gray-300 text-gray-900 rounded-lg hover:border-blue-600 hover:text-blue-600 font-semibold transition-all duration-300">
                          Edit
                        </button>
                        <button className="px-4 py-2 bg-gray-200 text-gray-900 rounded-lg hover:bg-gray-300 font-semibold transition-all duration-300">
                          View Applicants
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Jobs I Applied For */}
        {activeTab === 'applied' && (
          <div>
            {APPLIED_JOBS.length === 0 ? (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">No applications yet</h3>
                <p className="text-gray-600 mb-6">Start applying to jobs and earn money</p>
                <a
                  href="/browse-jobs"
                  className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-bold hover:shadow-lg transition-all duration-300"
                >
                  Browse Jobs
                </a>
              </div>
            ) : (
              <div className="space-y-4">
                {APPLIED_JOBS.map((job) => (
                  <div
                    key={job.id}
                    className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-bold text-gray-900">{job.title}</h3>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusBadge(job.status)}`}>
                            {getStatusLabel(job.status)}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                          <span>📁 {job.category}</span>
                          <span>👤 Posted by {job.postedBy}</span>
                          <span>📅 Deadline: {job.deadline}</span>
                          <span>💰 ${job.budget}</span>
                        </div>
                        <p className="text-xs text-gray-500 mt-2">Applied on {job.appliedDate}</p>
                      </div>
                      <div className="flex gap-2">
                        <button className="px-4 py-2 border border-gray-300 text-gray-900 rounded-lg hover:border-blue-600 hover:text-blue-600 font-semibold transition-all duration-300">
                          View Job
                        </button>
                        {job.status === 'accepted' && (
                          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold transition-all duration-300">
                            Start Work
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

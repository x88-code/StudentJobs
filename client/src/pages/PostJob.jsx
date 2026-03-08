import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { jobApi } from '../api/jobApi';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PostJob() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    budget: '',
    category: 'Coding',
    deadline: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const jobData = {
        ...formData,
        budget: parseInt(formData.budget),
      };
      await jobApi.create(jobData);
      setSubmitted(true);
      setTimeout(() => navigate('/browse-jobs'), 2000);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to post job');
    } finally {
      setLoading(false);
    }
  };

  const CATEGORIES = ['Coding', 'Design', 'Writing', 'Assignments', 'Data Entry'];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Header */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 border-b border-gray-200 pt-28 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post a New Job</h1>
          <p className="text-lg text-gray-600">
            Share your task with other students and get it completed
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {submitted ? (
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 rounded-xl p-12 text-center">
            <div className="text-6xl mb-4">✅</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Job Posted Successfully!</h2>
            <p className="text-gray-600 mb-6">
              Your job has been posted and is now visible to other students.
            </p>
            <div className="inline-flex items-center gap-2 bg-white border border-green-300 rounded-lg px-6 py-3">
              <span className="text-lg">🎉</span>
              <span className="font-semibold text-gray-900">Redirecting...</span>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            {error && (
              <div className="p-4 bg-red-50 border border-red-300 rounded-xl">
                <p className="text-red-800 font-semibold">⚠️ {error}</p>
              </div>
            )}
            {/* Job Title */}
            <div>
              <label className="block text-lg font-bold text-gray-900 mb-3">
                Job Title *
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="e.g., Write a 2000 word essay on Climate Change"
                required
                className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900 placeholder-gray-400"
              />
              <p className="text-sm text-gray-600 mt-2">
                Be specific and clear about what you need done
              </p>
            </div>

            {/* Description */}
            <div>
              <label className="block text-lg font-bold text-gray-900 mb-3">
                Job Description *
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Provide detailed information about the job, requirements, and expectations..."
                required
                rows="8"
                className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900 placeholder-gray-400 resize-vertical"
              />
              <p className="text-sm text-gray-600 mt-2">
                Include all details that will help students understand and complete the job well
              </p>
            </div>

            {/* Category */}
            <div>
              <label className="block text-lg font-bold text-gray-900 mb-3">
                Category *
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900"
              >
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
              <p className="text-sm text-gray-600 mt-2">
                Select the category that best fits your job
              </p>
            </div>

            {/* Budget */}
            <div>
              <label className="block text-lg font-bold text-gray-900 mb-3">
                Budget (USD) *
              </label>
              <div className="relative">
                <span className="absolute left-6 top-4 text-gray-900 font-semibold">$</span>
                <input
                  type="number"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  placeholder="50"
                  min="5"
                  required
                  className="w-full pl-12 pr-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900 placeholder-gray-400"
                />
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Set a fair budget that reflects the complexity of the work required
              </p>
            </div>

            {/* Deadline */}
            <div>
              <label className="block text-lg font-bold text-gray-900 mb-3">
                Deadline *
              </label>
              <input
                type="date"
                name="deadline"
                value={formData.deadline}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900"
              />
              <p className="text-sm text-gray-600 mt-2">
                When do you need the job to be completed?
              </p>
            </div>

            {/* Preview Card */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Preview</h3>
              <div className="bg-white border border-gray-200 rounded-lg p-4 space-y-3">
                <h4 className="font-bold text-gray-900 text-lg">
                  {formData.title || 'Your job title will appear here'}
                </h4>
                <p className="text-gray-600 text-sm line-clamp-2">
                  {formData.description || 'Your job description will appear here'}
                </p>
                <div className="flex justify-between items-center text-sm">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full font-semibold">
                    {formData.category}
                  </span>
                  <span className="text-green-600 font-bold">
                    ${formData.budget || '0'}
                  </span>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex gap-4">
              <button
                type="submit"
                disabled={!formData.title || !formData.description || !formData.budget || !formData.deadline || loading}
                className="flex-1 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? '🔄 Posting...' : '✍️ Post Job'}
              </button>
              <button
                type="button"
                onClick={() =>
                  setFormData({
                    title: '',
                    description: '',
                    budget: '',
                    category: 'Coding',
                    deadline: '',
                  })
                }
                className="flex-1 px-8 py-4 border-2 border-gray-300 text-gray-900 font-bold rounded-lg hover:border-gray-400 transition-all duration-300"
              >
                Clear Form
              </button>
            </div>
          </form>
        )}
      </div>

      <Footer />
    </div>
  );
}

import { useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { bookingApi } from '../api/bookingApi';

export default function BookProfessional() {
  const navigate = useNavigate();
  const { professionalId } = useParams();
  const [formData, setFormData] = useState({
    professionalId,
    clientName: '',
    clientPhone: '',
    service: '',
    description: '',
    location: '',
    date: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await bookingApi.create(formData);
      setSuccess(true);
      setTimeout(() => navigate('/'), 2000);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to create booking');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      {/* Navigation */}
      <nav className="bg-gradient-to-r from-slate-900/80 to-purple-900/80 backdrop-blur-xl border-b border-purple-500/20 sticky top-0 z-50 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
              <span className="text-white font-bold text-xl">⚙️</span>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              StudentJobs
            </h1>
          </Link>
          <Link to="/" className="group relative px-6 py-3 text-gray-300 hover:text-white font-semibold transition-colors duration-300 cursor-pointer">
            ← Back to Services
          </Link>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 border border-purple-500/30 rounded-2xl p-12 shadow-2xl overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative">
            <div className="flex items-center gap-4 mb-10">
              <div className="text-5xl">📋</div>
              <div>
                <h2 className="text-4xl font-bold text-white">Request Service</h2>
                <p className="text-gray-400 mt-2">Fill in your service details to get started</p>
              </div>
            </div>

            {success && (
              <div className="mb-8 p-6 bg-green-500/20 border border-green-500/50 rounded-xl">
                <p className="text-green-200 font-semibold text-lg">✅ Booking request submitted successfully!</p>
                <p className="text-green-200/80 mt-2">Redirecting back to home...</p>
              </div>
            )}

            {error && (
              <div className="mb-8 p-6 bg-red-500/20 border border-red-500/50 rounded-xl">
                <p className="text-red-200 font-semibold">⚠️ {error}</p>
              </div>
            )}

            {!success && (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Info */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <span>👤</span> Your Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 font-semibold mb-3">Full Name</label>
                      <input
                        type="text"
                        name="clientName"
                        value={formData.clientName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all duration-300"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 font-semibold mb-3">Phone Number</label>
                      <input
                        type="tel"
                        name="clientPhone"
                        value={formData.clientPhone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all duration-300"
                        placeholder="0712345678"
                      />
                    </div>
                  </div>
                </div>

                {/* Service Needed */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <span>🔧</span> Service Details
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-gray-300 font-semibold mb-3">Type of Service</label>
                      <input
                        type="text"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all duration-300"
                        placeholder="e.g., Plumbing repair, Electrical work"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 font-semibold mb-3">Service Location</label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all duration-300"
                        placeholder="Your address or service location"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 font-semibold mb-3">Preferred Date</label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all duration-300"
                      />
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <span>📝</span> Detailed Description
                  </h3>
                  <label className="block text-gray-300 font-semibold mb-3">Tell us what you need</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all duration-300 resize-none"
                    placeholder="Provide detailed information about the work that needs to be done..."
                  />
                </div>

                {/* Submit Button */}
                <div className="flex gap-4 pt-8 border-t border-slate-700">
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-purple-600/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden cursor-pointer text-lg"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative flex items-center justify-center gap-2">
                      {loading ? '🔄 Processing...' : '✨ Request Service'}
                    </span>
                  </button>
                  <Link to="/" className="group relative px-8 py-4 border-2 border-slate-600 text-white rounded-xl font-bold hover:border-slate-500 transition-all duration-300 overflow-hidden cursor-pointer">
                    <div className="absolute inset-0 bg-slate-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative">Cancel</span>
                  </Link>
                </div>
              </form>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

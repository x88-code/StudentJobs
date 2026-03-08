import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { bookingApi } from '../api/bookingApi';

export default function ProfessionalDashboard() {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const professionalId = localStorage.getItem('professionalId');
  const professionalName = localStorage.getItem('professionalName');
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      navigate('/professional-login');
      return;
    }
    fetchBookings();
  }, [token, navigate]);

  const fetchBookings = async () => {
    try {
      const response = await bookingApi.getProfessionalBookings(professionalId);
      setBookings(response.data);
      setError('');
    } catch (err) {
      setError('Failed to load bookings');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('professionalId');
    localStorage.removeItem('professionalName');
    navigate('/professional-login');
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
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                StudentJobs
              </h1>
              <p className="text-xs text-gray-400">Dashboard</p>
            </div>
          </Link>
          <div className="flex items-center gap-4">
            <div className="hidden sm:block">
              <p className="text-gray-300 font-semibold">Welcome, <span className="text-blue-400">{professionalName}</span></p>
            </div>
            <button
              onClick={handleLogout}
              className="group relative px-6 py-3 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-2xl hover:shadow-red-600/50 transition-all duration-300 overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center gap-2">
                🚪 Logout
              </span>
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h2 className="text-5xl font-bold text-white mb-3">Your Bookings</h2>
          <p className="text-gray-400 text-lg">Manage your incoming service requests</p>
        </div>

        {error && (
          <div className="mb-8 p-6 bg-red-500/20 border border-red-500/50 rounded-xl text-red-200 shadow-lg">
            <p className="font-semibold">⚠️ {error}</p>
          </div>
        )}

        {loading ? (
          <div className="flex justify-center items-center py-32">
            <div className="relative w-20 h-20">
              <div className="absolute inset-0 border-4 border-purple-300/30 border-t-purple-500 rounded-full animate-spin shadow-lg" />
            </div>
          </div>
        ) : bookings.length === 0 ? (
          <div className="text-center py-20 bg-gradient-to-br from-slate-800/50 to-purple-800/20 border border-purple-500/20 rounded-2xl">
            <p className="text-gray-300 text-2xl font-semibold mb-4">📭 No bookings yet</p>
            <p className="text-gray-400 mb-8">Your clients will appear here when they book your services</p>
            <Link to="/" className="group relative inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center gap-2">
                ← Back to Home
              </span>
            </Link>
          </div>
        ) : (
          <div className="grid gap-8">
            {bookings.map((booking, idx) => (
              <div
                key={booking._id}
                className="group relative bg-gradient-to-br from-slate-800 via-purple-800/10 to-slate-900 border border-slate-700 rounded-2xl overflow-hidden transition-all duration-300 hover:border-purple-400/60 hover:shadow-2xl hover:shadow-purple-600/30 shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/10 group-hover:to-purple-600/10 transition-all duration-300" />

                <div className="relative p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    {/* Client Info */}
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                        <span className="text-3xl">👤</span>
                        {booking.clientName}
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <span className="text-2xl flex-shrink-0">📱</span>
                          <div>
                            <p className="text-gray-400 text-sm">Phone</p>
                            <p className="text-white font-semibold">{booking.clientPhone}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-2xl flex-shrink-0">📍</span>
                          <div>
                            <p className="text-gray-400 text-sm">Location</p>
                            <p className="text-white font-semibold">{booking.location}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Service Info */}
                    <div>
                      <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/30 to-purple-500/30 border border-blue-400/50 rounded-full mb-4">
                        <span className="text-blue-200 text-sm font-bold">
                          {booking.service}
                        </span>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <span className="text-2xl flex-shrink-0">📅</span>
                          <div>
                            <p className="text-gray-400 text-sm">Preferred Date</p>
                            <p className="text-white font-semibold">{new Date(booking.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-2xl flex-shrink-0">💬</span>
                          <div>
                            <p className="text-gray-400 text-sm">Description</p>
                            <p className="text-white font-semibold text-sm">{booking.description.substring(0, 100)}...</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-8 border-t border-slate-700">
                    <button className="group/btn relative flex-1 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-bold shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer">
                      <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                      <span className="relative flex items-center justify-center gap-2">
                        ✅ Accept Booking
                      </span>
                    </button>
                    <button className="group/btn relative flex-1 px-6 py-3 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-xl font-bold shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer">
                      <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                      <span className="relative flex items-center justify-center gap-2">
                        ❌ Decline
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

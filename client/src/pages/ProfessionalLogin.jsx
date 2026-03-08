import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { professionalApi } from '../api/professionalApi';
import Navigation from '../components/Navigation';

export default function FundiLogin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ phone: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await professionalApi.login(formData.phone, formData.password);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('professionalId', response.data.professional.id);
      localStorage.setItem('professionalName', response.data.professional.name);
      navigate('/professional-dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      <Navigation />
      <div className="flex items-center justify-center px-4 py-10 pt-32">
        <div className="w-full max-w-md">
          <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 border border-purple-500/30 rounded-2xl p-10 shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative">
              <div className="text-center mb-10">
                <Link to="/" className="inline-block mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 mx-auto">
                    <span className="text-white font-bold text-2xl">⚙️</span>
                  </div>
                </Link>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-2">StudentJobs</h1>
                <p className="text-gray-400">Professional Login</p>
              </div>

              {error && (
                <div className="mb-8 p-4 bg-red-500/20 border border-red-500/50 rounded-xl">
                  <p className="text-red-200 text-sm font-semibold">⚠️ {error}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-300 font-semibold mb-3">Phone Number</label>
                  <div className="relative group">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl">📱</span>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all duration-300"
                      placeholder="0712345678"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 font-semibold mb-3">Password</label>
                  <div className="relative group">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl">🔐</span>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all duration-300"
                      placeholder="Enter your password"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-purple-600/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative">
                    {loading ? '🔄 Logging in...' : '✨ Login'}
                  </span>
                </button>
              </form>

              <div className="flex items-center gap-4 my-8">
                <div className="flex-1 h-px bg-slate-700" />
                <span className="text-gray-500 text-sm">or</span>
                <div className="flex-1 h-px bg-slate-700" />
              </div>

              <div className="text-center mb-6">
                <p className="text-gray-400">
                  Don't have an account?{' '}
                  <Link
                    to="/fundi-register"
                    className="text-blue-400 hover:text-blue-300 font-bold transition-colors duration-300 cursor-pointer"
                  >
                    Register now
                  </Link>
                </p>
              </div>

              <Link to="/" className="block text-center text-gray-400 hover:text-gray-200 text-sm font-medium transition-colors duration-300 cursor-pointer">
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Dialog, DialogPanel } from '@headlessui/react';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Browse Jobs', href: '/jobs' },
  { name: 'Post Job', href: '/post-job' },
  { name: 'Dashboard', href: '/dashboard' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
      <nav className="flex items-center justify-between p-6 max-w-7xl mx-auto w-full">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 via-blue-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
              <span className="text-white font-black text-lg">💼</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-black text-gray-900">StudentJobs</h1>
              <p className="text-xs font-medium text-gray-500">Freelance Platform</p>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-10 lg:flex-1 lg:justify-center">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-300 relative group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-3">
          {!isLoggedIn ? (
            <>
              <Link
                to="/login"
                className="px-6 py-2.5 text-sm font-bold text-gray-900 border-2 border-gray-300 rounded-lg hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="px-6 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <button className="px-6 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:shadow-lg transition-all duration-300">
              Sign Out
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="p-2.5 text-gray-900 hover:bg-gray-100 rounded-lg transition-colors duration-300"
          >
            <Bars3Icon className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-40" onClick={() => setMobileMenuOpen(false)} />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm border-l border-gray-200">
          <div className="flex items-center justify-between mb-8">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold">💼</span>
              </div>
              <span className="text-lg font-bold text-gray-900">StudentJobs</span>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 text-gray-900 hover:bg-gray-100 rounded-lg transition-colors duration-300"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>
          <div className="space-y-2 mb-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-base font-semibold text-gray-900 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-lg transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="space-y-3 border-t border-gray-200 pt-6">
            {!isLoggedIn ? (
              <>
                <Link
                  to="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full px-4 py-3 text-center text-sm font-bold text-gray-900 border-2 border-gray-300 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full px-4 py-3 text-center text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:shadow-lg transition-all"
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <button className="w-full px-4 py-3 text-center text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:shadow-lg transition-all">
                Sign Out
              </button>
            )}
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}

import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-gradient-to-r from-slate-900/95 to-purple-900/95 backdrop-blur-xl border-b border-purple-500/20 shadow-2xl">
      <nav className="flex items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:shadow-purple-500/50 transition-all duration-300">
              <span className="text-white font-bold text-lg">⚙️</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                StudentJobs
              </h1>
              <p className="text-xs text-gray-400">Student Freelance Platform</p>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-8 lg:flex-1 lg:justify-center">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm/6 font-semibold text-gray-200 hover:text-white transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Desktop Login Button */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-4">
          <Link
            to="/professional-login"
            className="group relative px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-2xl hover:shadow-purple-600/50 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative">Login</span>
          </Link>
          <Link
            to="/professional-register"
            className="group relative px-6 py-2.5 border-2 border-purple-500/50 text-white rounded-lg font-semibold hover:border-purple-400 transition-all duration-300 overflow-hidden cursor-pointer"
          >
            <div className="absolute inset-0 bg-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative">Become Professional</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-200 hover:text-white hover:bg-white/5 transition-all duration-300"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="size-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-40" onClick={() => setMobileMenuOpen(false)} />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gradient-to-br from-slate-900 to-purple-900 px-6 py-6 sm:max-w-sm shadow-2xl border-l border-purple-500/20">
          <div className="flex items-center justify-between mb-8">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold">⚙️</span>
              </div>
              <span className="text-lg font-bold text-white">StudentJobs</span>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-md p-2.5 text-gray-200 hover:text-white hover:bg-white/5 transition-all duration-300"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="size-6" />
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <div className="space-y-2 mb-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block rounded-lg px-4 py-3 text-base font-semibold text-gray-200 hover:text-white hover:bg-white/5 transition-all duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Auth Buttons */}
          <div className="space-y-3 border-t border-purple-500/20 pt-6">
            <Link
              to="/professional-login"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full rounded-lg px-4 py-3 text-center text-base font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg transition-all duration-300"
            >
              Login
            </Link>
            <Link
              to="/professional-register"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full rounded-lg px-4 py-3 text-center text-base font-semibold border-2 border-purple-500/50 text-white hover:border-purple-400 transition-all duration-300"
            >
              Become Professional
            </Link>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}

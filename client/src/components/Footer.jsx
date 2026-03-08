import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 via-gray-950 to-black text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-16">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-xl">
                <span className="text-white font-black text-lg">💼</span>
              </div>
              <div>
                <span className="text-xl font-black text-white block">StudentJobs</span>
                <span className="text-xs font-medium text-gray-400">Freelance Platform</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed font-light">
              Empower students to earn money by helping each other. Direct payments, zero middleman, endless opportunities.
            </p>
            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              {['Twitter', 'Facebook', 'LinkedIn', 'Instagram'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-all duration-300 font-bold text-sm"
                  title={social}
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>

          {/* For Students */}
          <div className="space-y-4">
            <h4 className="text-white font-black text-lg">For Students</h4>
            <ul className="space-y-3 text-sm">
              {[
                { name: 'Browse Jobs', href: '/browse-jobs' },
                { name: 'My Dashboard', href: '/dashboard' },
                { name: 'How It Works', href: '#' },
                { name: 'Categories', href: '#' },
                { name: 'Success Stories', href: '#' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 font-medium flex items-center gap-2"
                  >
                    <span>→</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* For Job Posters */}
          <div className="space-y-4">
            <h4 className="text-white font-black text-lg">For Job Posters</h4>
            <ul className="space-y-3 text-sm">
              {[
                { name: 'Post a Job', href: '/post-job' },
                { name: 'Pricing', href: '#' },
                { name: 'Safety Tips', href: '#' },
                { name: 'Find Talent', href: '#' },
                { name: 'FAQ', href: '#' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 font-medium flex items-center gap-2"
                  >
                    <span>→</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-white font-black text-lg">Company</h4>
            <ul className="space-y-3 text-sm">
              {[
                { name: 'About Us', href: '#' },
                { name: 'Contact', href: '#' },
                { name: 'Blog', href: '#' },
                { name: 'Privacy Policy', href: '#' },
                { name: 'Terms of Service', href: '#' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 font-medium flex items-center gap-2"
                  >
                    <span>→</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800/50 my-12"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4">
          <p className="text-sm text-gray-400 font-light">
            © 2024 StudentJobs. All rights reserved. | Made with ❤️ for students.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 font-medium">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 font-medium">
              Terms
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 font-medium">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

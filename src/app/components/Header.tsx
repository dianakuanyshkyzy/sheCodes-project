// src/components/Header.tsx
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <a className="text-2xl font-bold">MyProject</a>
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-10">
            <Link href="/about">
              <a className="text-gray-500 hover:text-gray-900">About</a>
            </Link>
            <Link href="/services">
              <a className="text-gray-500 hover:text-gray-900">Services</a>
            </Link>
            <Link href="/contact">
              <a className="text-gray-500 hover:text-gray-900">Contact</a>
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center justify-end">
            <Link href="/signup">
              <a className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Get Started
              </a>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

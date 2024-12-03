import React from 'react';
import FirstHeader from '../components/FirstHeader';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <header className="py-4 border-b border-gray-300">
      <FirstHeader />
      </header>

      {/* Main Content */}
      <main className="my-8">{children}</main>

      {/* Footer */}
      <footer className="py-4 border-t border-gray-300 text-center text-sm text-gray-500">
        © 2024 My Website. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;

import React from 'react';
import FirstHeader from '../components/FirstHeader';
import SearchBar from '../components/SearchBar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen mx-auto px-4 sm:px-6 lg:px-6">
      {/* Header */}
      <header className="py-4">
        <FirstHeader />
        <SearchBar />
      </header>

      <main className="flex-grow my-8">{children}</main>

      <footer className="py-4 border-t border-gray-300 text-center text-sm text-gray-500">
        © 2024 My Website. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;

import React from 'react';
import Layout from '../layouts/Layout';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <div className="text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Welcome to the Home Page</h2>
        <p className="mt-4 text-lg text-gray-600">
          This page is wrapped in a consistent layout with margins.
        </p>
      </div>
    </Layout>
  );
};

export default HomePage;

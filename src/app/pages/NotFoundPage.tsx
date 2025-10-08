// pages/404.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="h-[90vh] bg-white flex items-center justify-center px-4 sm:px-6 lg:px-8 -translate-y-10">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 rounded-full mb-6">
            <svg
              className="w-10 h-10 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>
          <h1 className="text-6xl font-bold text-gray-900 mb-4 font-playfair_display">
            404
          </h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4 font-playfair_display">
            Page Not Found
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed font-semibold">
            Sorry, we couldn't find the page you're looking for. It might have
            been moved, deleted, or you entered the wrong URL.
          </p>
        </div>

        <div className="space-y-4">
          <button
            onClick={() => navigate('/')}
            className="w-full bg-slate-700 hover:bg-slate-800 text-white font-medium py-3 px-6 rounded-lg transition duration-200 transform hover:scale-105 shadow-lg"
          >
            Go to Homepage
          </button>

          <button
            onClick={handleGoBack}
            className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-6 rounded-lg transition duration-200 border border-gray-300"
          >
            Go Back
          </button>
        </div>

        <div className="mt-8">
          <p className="text-sm text-gray-500 font-semibold">
            Need help?{' '}
            <button
              onClick={() => navigate('/contact')}
              className="text-blue-600 hover:text-blue-800 underline cursor-pointer"
            >
              Contact Support
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;

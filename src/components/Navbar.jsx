import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className="text-2xl font-bold text-gray-800">SoloSphere</span>
          </Link>

          <div className="flex items-center space-x-6">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              to="/add-job"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Add Job
            </Link>
            <Link
              to="/my-posted-jobs"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              My Posted Jobs
            </Link>
            <Link
              to="/my-bids"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              My Bids
            </Link>
            <Link
              to="/bid-requests"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Bid Requests
            </Link>
            <Link
              to="/login"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 font-medium transition-colors"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

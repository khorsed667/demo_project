import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddJob = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    deadline: '',
    description: '',
    category: '',
    minPrice: '',
    maxPrice: ''
  });

  const categories = ['Web Development', 'Digital Marketing', 'Graphics & Design'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Job posted:', formData);
    alert('Job posted successfully! (This will connect to backend in production)');
    navigate('/my-posted-jobs');
  };

  return (
    <div className="min-h-[calc(100vh-12rem)] bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Post a New Job</h1>
            <p className="text-gray-600">Fill in the details to create your job listing</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-gray-700 font-medium mb-2">
                Job Title *
              </label>
              <input
                id="title"
                name="title"
                type="text"
                required
                value={formData.title}
                onChange={handleChange}
                placeholder="e.g., Build a Responsive Website"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="category" className="block text-gray-700 font-medium mb-2">
                Category *
              </label>
              <select
                id="category"
                name="category"
                required
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select a category</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="deadline" className="block text-gray-700 font-medium mb-2">
                Deadline *
              </label>
              <input
                id="deadline"
                name="deadline"
                type="date"
                required
                value={formData.deadline}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="minPrice" className="block text-gray-700 font-medium mb-2">
                  Minimum Price ($) *
                </label>
                <input
                  id="minPrice"
                  name="minPrice"
                  type="number"
                  required
                  min="0"
                  value={formData.minPrice}
                  onChange={handleChange}
                  placeholder="500"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="maxPrice" className="block text-gray-700 font-medium mb-2">
                  Maximum Price ($) *
                </label>
                <input
                  id="maxPrice"
                  name="maxPrice"
                  type="number"
                  required
                  min="0"
                  value={formData.maxPrice}
                  onChange={handleChange}
                  placeholder="1000"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label htmlFor="description" className="block text-gray-700 font-medium mb-2">
                Description *
              </label>
              <textarea
                id="description"
                name="description"
                required
                rows="6"
                value={formData.description}
                onChange={handleChange}
                placeholder="Provide detailed information about your job requirements..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              />
            </div>

            <div className="flex items-center justify-end space-x-4 pt-4">
              <button
                type="button"
                onClick={() => navigate('/')}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Post Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddJob;

import { useNavigate } from 'react-router-dom';
import Table from '../components/Table';
import { mockJobs } from '../data/mockJobs';

const MyPostedJobs = () => {
  const navigate = useNavigate();
  const userEmail = 'john.doe@example.com';
  const myJobs = mockJobs.filter(job => job.buyerEmail === userEmail);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const handleUpdate = (job) => {
    navigate(`/update-job/${job.id}`);
  };

  const handleDelete = (job) => {
    if (window.confirm(`Are you sure you want to delete "${job.title}"?`)) {
      console.log('Deleting job:', job.id);
      alert('Job deleted successfully! (This will connect to backend in production)');
    }
  };

  const columns = [
    {
      header: 'Job Title',
      accessor: 'title',
      render: (row) => (
        <div className="max-w-md">
          <p className="font-medium text-gray-800">{row.title}</p>
          <p className="text-xs text-gray-500 mt-1">{row.category}</p>
        </div>
      )
    },
    {
      header: 'Deadline',
      accessor: 'deadline',
      render: (row) => formatDate(row.deadline)
    },
    {
      header: 'Price Range',
      accessor: 'price',
      render: (row) => (
        <span className="font-semibold text-gray-800">
          ${row.minPrice} - ${row.maxPrice}
        </span>
      )
    },
    {
      header: 'Description',
      accessor: 'description',
      render: (row) => (
        <div className="max-w-xs">
          <p className="text-sm text-gray-600 line-clamp-2">{row.description}</p>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-[calc(100vh-12rem)] bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">My Posted Jobs</h1>
            <p className="text-gray-600">Manage all your job listings</p>
          </div>
          <button
            onClick={() => navigate('/add-job')}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg>
            Add New Job
          </button>
        </div>

        <Table
          columns={columns}
          data={myJobs}
          actions={(row) => (
            <>
              <button
                onClick={() => handleUpdate(row)}
                className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors text-sm font-medium"
              >
                Update
              </button>
              <button
                onClick={() => handleDelete(row)}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm font-medium"
              >
                Delete
              </button>
            </>
          )}
        />
      </div>
    </div>
  );
};

export default MyPostedJobs;

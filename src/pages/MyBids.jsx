import Table from '../components/Table';
import { mockBids } from '../data/mockBids';

const MyBids = () => {
  const userEmail = 'freelancer1@example.com';
  const myBids = mockBids.filter(bid => bid.bidderEmail === userEmail);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getStatusBadge = (status) => {
    const statusStyles = {
      'Pending': 'bg-yellow-100 text-yellow-800',
      'In Progress': 'bg-blue-100 text-blue-800',
      'Complete': 'bg-emerald-100 text-emerald-800',
      'Rejected': 'bg-red-100 text-red-800'
    };

    return (
      <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusStyles[status]}`}>
        {status}
      </span>
    );
  };

  const handleComplete = (bid) => {
    if (bid.status === 'In Progress') {
      console.log('Marking bid as complete:', bid.id);
      alert('Bid marked as complete! (This will connect to backend in production)');
    }
  };

  const columns = [
    {
      header: 'Job Title',
      accessor: 'jobTitle',
      render: (row) => (
        <div className="max-w-md">
          <p className="font-medium text-gray-800">{row.jobTitle}</p>
          <p className="text-xs text-gray-500 mt-1">{row.category}</p>
        </div>
      )
    },
    {
      header: 'Buyer Email',
      accessor: 'buyerEmail'
    },
    {
      header: 'Bid Price',
      accessor: 'price',
      render: (row) => (
        <span className="font-semibold text-gray-800">${row.price}</span>
      )
    },
    {
      header: 'Deadline',
      accessor: 'deadline',
      render: (row) => formatDate(row.deadline)
    },
    {
      header: 'Status',
      accessor: 'status',
      render: (row) => getStatusBadge(row.status)
    }
  ];

  return (
    <div className="min-h-[calc(100vh-12rem)] bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">My Bids</h1>
          <p className="text-gray-600">Track all your submitted bids and their status</p>
        </div>

        <div className="mb-6 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Bids</p>
                <p className="text-3xl font-bold text-gray-800 mt-1">{myBids.length}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Pending</p>
                <p className="text-3xl font-bold text-yellow-600 mt-1">
                  {myBids.filter(b => b.status === 'Pending').length}
                </p>
              </div>
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">In Progress</p>
                <p className="text-3xl font-bold text-blue-600 mt-1">
                  {myBids.filter(b => b.status === 'In Progress').length}
                </p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Completed</p>
                <p className="text-3xl font-bold text-emerald-600 mt-1">
                  {myBids.filter(b => b.status === 'Complete').length}
                </p>
              </div>
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <Table
          columns={columns}
          data={myBids}
          actions={(row) => (
            <button
              onClick={() => handleComplete(row)}
              disabled={row.status !== 'In Progress'}
              className={`px-4 py-2 rounded-lg transition-colors text-sm font-medium ${
                row.status === 'In Progress'
                  ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {row.status === 'Complete' ? 'Completed' : 'Complete'}
            </button>
          )}
        />
      </div>
    </div>
  );
};

export default MyBids;

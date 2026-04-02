import Table from '../components/Table';
import { mockBids } from '../data/mockBids';

const BidRequests = () => {
  const userEmail = 'john.doe@example.com';
  const bidRequests = mockBids.filter(bid => bid.buyerEmail === userEmail);

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

  const handleAccept = (bid) => {
    if (bid.status === 'Pending') {
      console.log('Accepting bid:', bid.id);
      alert('Bid accepted! Status changed to "In Progress" (This will connect to backend in production)');
    }
  };

  const handleReject = (bid) => {
    if (bid.status === 'Pending') {
      if (window.confirm('Are you sure you want to reject this bid?')) {
        console.log('Rejecting bid:', bid.id);
        alert('Bid rejected! (This will connect to backend in production)');
      }
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
      header: 'Bidder Email',
      accessor: 'bidderEmail'
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
      header: 'Category',
      accessor: 'category',
      render: (row) => (
        <span className="inline-block bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full">
          {row.category}
        </span>
      )
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
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Bid Requests</h1>
          <p className="text-gray-600">Review and manage bids on your posted jobs</p>
        </div>

        <div className="mb-6 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Requests</p>
                <p className="text-3xl font-bold text-gray-800 mt-1">{bidRequests.length}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Pending</p>
                <p className="text-3xl font-bold text-yellow-600 mt-1">
                  {bidRequests.filter(b => b.status === 'Pending').length}
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
                  {bidRequests.filter(b => b.status === 'In Progress').length}
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
                <p className="text-gray-600 text-sm">Rejected</p>
                <p className="text-3xl font-bold text-red-600 mt-1">
                  {bidRequests.filter(b => b.status === 'Rejected').length}
                </p>
              </div>
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <Table
          columns={columns}
          data={bidRequests}
          actions={(row) => (
            <>
              <button
                onClick={() => handleAccept(row)}
                disabled={row.status !== 'Pending'}
                className={`px-4 py-2 rounded-lg transition-colors text-sm font-medium ${
                  row.status === 'Pending'
                    ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Accept
              </button>
              <button
                onClick={() => handleReject(row)}
                disabled={row.status !== 'Pending'}
                className={`px-4 py-2 rounded-lg transition-colors text-sm font-medium ${
                  row.status === 'Pending'
                    ? 'bg-red-600 text-white hover:bg-red-700'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Reject
              </button>
            </>
          )}
        />
      </div>
    </div>
  );
};

export default BidRequests;

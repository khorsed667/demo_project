import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import JobDetails from '../pages/JobDetails';
import Login from '../pages/Login';
import Register from '../pages/Register';
import NotFound from '../pages/NotFound';
import AddJob from '../pages/AddJob';
import MyPostedJobs from '../pages/MyPostedJobs';
import UpdateJob from '../pages/UpdateJob';
import MyBids from '../pages/MyBids';
import BidRequests from '../pages/BidRequests';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/job/:id',
        element: <JobDetails />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/add-job',
        element: <AddJob />
      },
      {
        path: '/my-posted-jobs',
        element: <MyPostedJobs />
      },
      {
        path: '/update-job/:id',
        element: <UpdateJob />
      },
      {
        path: '/my-bids',
        element: <MyBids />
      },
      {
        path: '/bid-requests',
        element: <BidRequests />
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
]);

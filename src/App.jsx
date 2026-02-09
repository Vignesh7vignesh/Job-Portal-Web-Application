import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

/* COMMON PAGES */
import Home from "./pages/common/Home";

/* AUTH PAGES */
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Logout from "./pages/auth/Logout";

/* JOB SEEKER PAGES */
import SearchJobs from "./pages/jobseeker/SearchJobs";
import Dashboard from "./pages/jobseeker/Dashboard";
import Profile from "./pages/jobseeker/Profile";
import ApplyJob from "./pages/jobseeker/ApplyJob";
import Applications from "./pages/jobseeker/Applications";

/* RECRUITER PAGES */
import RecruiterDashboard from "./pages/recruiter/Dashboard";
import PostJob from "./pages/recruiter/PostJob";
import ManageJobs from "./pages/recruiter/ManageJobs";
import ViewApplications from "./pages/recruiter/ViewApplications";

function App() {
  return (
    <BrowserRouter>
      {/* NAVBAR */}
      <Navbar />

      {/* ROUTES */}
      <Routes>
        {/* PUBLIC ROUTES */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />

        {/* JOB SEARCH (PUBLIC – APPLY BUTTON REDIRECTS) */}
        <Route path="/jobs" element={<SearchJobs />} />

        {/* JOB SEEKER – PROTECTED */}
        <Route
          path="/jobseeker/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/jobseeker/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/jobseeker/apply"
          element={
            <ProtectedRoute>
              <ApplyJob />
            </ProtectedRoute>
          }
        />
        <Route
          path="/jobseeker/applications"
          element={
            <ProtectedRoute>
              <Applications />
            </ProtectedRoute>
          }
        />

        {/* RECRUITER – PROTECTED */}
        <Route
          path="/recruiter/dashboard"
          element={
            <ProtectedRoute>
              <RecruiterDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/recruiter/post-job"
          element={
            <ProtectedRoute>
              <PostJob />
            </ProtectedRoute>
          }
        />
        <Route
          path="/recruiter/manage-jobs"
          element={
            <ProtectedRoute>
              <ManageJobs />
            </ProtectedRoute>
          }
        />
        <Route
          path="/recruiter/applications"
          element={
            <ProtectedRoute>
              <ViewApplications />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

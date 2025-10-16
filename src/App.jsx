import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Landing from './pages/Landing';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Onboarding from './pages/Onboarding';
import StressAssessment from './pages/StressAssessment';
import Dashboard from './pages/Dashboard';
import TherapySelection from './pages/TherapySelection';
import TherapySession from './pages/TherapySession';
import AITherapy from './pages/AITherapy';
import Products from './pages/Products';
import Blogs from './pages/Blogs';
import BlogDetail from './pages/BlogDetail';
import About from './pages/About';
import Support from './pages/Support';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/stress-assessment" element={<StressAssessment />} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/therapy" element={<ProtectedRoute><TherapySelection /></ProtectedRoute>} />
          <Route path="/therapy/:sessionId" element={<ProtectedRoute><TherapySession /></ProtectedRoute>} />
          <Route path="/ai-therapy" element={<ProtectedRoute><AITherapy /></ProtectedRoute>} />
          <Route path="/products" element={<Products />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<BlogDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
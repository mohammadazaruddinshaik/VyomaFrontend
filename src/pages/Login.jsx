import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Button from '../components/Button';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    if (email === 'vyoma@gmail.com' && password === 'vyoma123') {
      login({ email, name: 'Vyoma User' });
      navigate('/dashboard');
    } else {
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-vyoma-dark flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Branding */}
        <div className="hidden md:block">
          <div className="relative">
            <div className="absolute inset-0 bg-aurora-gradient opacity-20 blur-3xl rounded-full"></div>
            <div className="relative z-10">
              <h1 className="text-6xl font-bold gradient-text mb-6">
                Welcome Back
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Continue your journey to mental wellness
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-vyoma-green rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-300">Access personalized therapy sessions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-vyoma-green rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-300">Track your wellness progress</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-vyoma-green rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-300">Explore immersive VR experiences</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="glass rounded-3xl p-8 md:p-12">
          <div className="mb-8">
            <Link to="/" className="text-3xl font-bold gradient-text">
              VYOMA
            </Link>
          </div>

          <h2 className="text-3xl font-bold text-white mb-2">Log In</h2>
          <p className="text-gray-400 mb-8">Enter your credentials to access your account</p>

          {error && (
            <div className="bg-red-500/20 border border-red-500 text-red-300 px-4 py-3 rounded-lg mb-6">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-white mb-2 font-medium">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-vyoma-green transition-colors"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-white mb-2 font-medium">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-vyoma-green transition-colors"
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-600 bg-gray-700" />
                <span className="text-gray-400 text-sm">Remember me</span>
              </label>
              <a href="#" className="text-vyoma-green hover:text-vyoma-lime text-sm transition-colors">
                Forgot password?
              </a>
            </div>

            <Button type="submit" variant="primary" className="w-full">
              Log In
            </Button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-400">
              Don't have an account?{' '}
              <Link to="/signup" className="text-vyoma-green hover:text-vyoma-lime font-semibold transition-colors">
                Sign Up
              </Link>
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-center text-gray-500 text-sm mb-4">Or continue with</p>
            <button className="w-full glass border border-white/20 rounded-xl px-4 py-3 flex items-center justify-center space-x-2 hover:bg-white/10 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span className="text-white">Continue with Google</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

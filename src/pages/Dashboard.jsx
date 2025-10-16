import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';
import GridBackground from '../components/GridBackground';

const Dashboard = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState({
    sessionsCompleted: 12,
    totalMinutes: 180,
    currentStreak: 7,
    stressReduction: 35
  });
  const [stressAssessment, setStressAssessment] = useState(null);

  useEffect(() => {
    const savedAssessment = localStorage.getItem('stressAssessment');
    if (savedAssessment) {
      setStressAssessment(JSON.parse(savedAssessment));
    }
  }, []);

  const recentSessions = [
    { id: 1, title: 'Guided Meditation', duration: '15 min', date: '2 hours ago', type: 'meditation' },
    { id: 2, title: 'Anxiety Relief', duration: '10 min', date: 'Yesterday', type: 'therapy' },
    { id: 3, title: 'Sleep Stories', duration: '20 min', date: '2 days ago', type: 'sleep' },
  ];

  const recommendedSessions = [
    { 
      id: 'stress-relief', 
      title: 'Deep Stress Relief', 
      duration: '12 min', 
      thumbnail: '🌊',
      description: 'Immersive ocean environment for deep relaxation'
    },
    { 
      id: 'morning-meditation', 
      title: 'Morning Meditation', 
      duration: '8 min', 
      thumbnail: '🌅',
      description: 'Start your day with mindful awareness'
    },
    { 
      id: 'focus-boost', 
      title: 'Focus Enhancement', 
      duration: '10 min', 
      thumbnail: '🎯',
      description: 'Improve concentration and mental clarity'
    },
  ];

  return (
    <GridBackground className="min-h-screen">
      <Navbar transparent={true} />

      <div className="pt-28 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Welcome Section */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
              Welcome back, <span className="gradient-text">{user?.name || 'Friend'}</span>
            </h1>
            <p className="text-xl text-gray-400">
              Continue your wellness journey
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-vyoma-purple to-vyoma-pink rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-3xl font-bold gradient-text">{stats.sessionsCompleted}</span>
              </div>
              <h3 className="text-white font-semibold">Sessions Completed</h3>
              <p className="text-gray-400 text-sm mt-1">All time</p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-vyoma-blue to-vyoma-teal rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-3xl font-bold gradient-text">{stats.totalMinutes}</span>
              </div>
              <h3 className="text-white font-semibold">Total Minutes</h3>
              <p className="text-gray-400 text-sm mt-1">Time in therapy</p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-vyoma-green to-vyoma-lime rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  </svg>
                </div>
                <span className="text-3xl font-bold gradient-text">{stats.currentStreak}</span>
              </div>
              <h3 className="text-white font-semibold">Current Streak</h3>
              <p className="text-gray-400 text-sm mt-1">Days in a row</p>
            </Card>

            <Card className={`p-6 relative overflow-hidden border-2 ${stressAssessment ? 'border-vyoma-green/30' : 'border-vyoma-purple/50 animate-pulse-border'}`}>
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${stressAssessment?.color || 'from-vyoma-pink to-vyoma-purple'} rounded-xl flex items-center justify-center`}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <span className="text-3xl font-bold gradient-text">
                  {stressAssessment ? `${stressAssessment.score}/40` : '--'}
                </span>
              </div>
              <h3 className="text-white font-semibold">Stress Level</h3>
              <p className="text-gray-400 text-sm mt-1">
                {stressAssessment ? `${stressAssessment.level} Stress` : 'Not assessed'}
              </p>
              {stressAssessment && (
                <Link 
                  to="/stress-assessment?retake=true"
                  className="absolute bottom-3 right-3 px-3 py-1 bg-vyoma-green/20 hover:bg-vyoma-green/30 text-vyoma-green rounded-lg text-xs font-semibold transition-colors flex items-center space-x-1"
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  <span>Retake</span>
                </Link>
              )}
              {!stressAssessment && (
                <Link 
                  to="/stress-assessment"
                  className="absolute bottom-3 right-3 px-3 py-1 bg-gradient-to-r from-vyoma-purple to-vyoma-pink text-white rounded-lg text-xs font-semibold transition-all hover:shadow-lg hover:shadow-vyoma-purple/50 flex items-center space-x-1"
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span>Take Test</span>
                </Link>
              )}
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {!stressAssessment && (
                <Card className="p-8 bg-gradient-to-r from-vyoma-purple/20 to-vyoma-pink/20 border-2 border-vyoma-purple/50 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-vyoma-purple/20 to-transparent rounded-full blur-3xl" />
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-14 h-14 bg-gradient-to-br from-vyoma-purple to-vyoma-pink rounded-2xl flex items-center justify-center animate-pulse">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">Take Your Stress Assessment</h3>
                          <p className="text-gray-400 text-sm mt-1">Understand your mental health status (2-3 minutes)</p>
                        </div>
                      </div>
                      <div className="px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-xs font-semibold">
                        Important
                      </div>
                    </div>
                    <p className="text-gray-300 mb-6">
                      Complete the PSS-10 scientifically validated questionnaire to receive personalized therapy recommendations and track your progress over time.
                    </p>
                    <div className="flex items-center space-x-4">
                      <Link to="/stress-assessment" className="btn-primary flex items-center space-x-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                        <span>Start Assessment Now</span>
                      </Link>
                      <div className="flex items-center space-x-2 text-gray-400 text-sm">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>10 quick questions</span>
                      </div>
                    </div>
                  </div>
                </Card>
              )}

              {stressAssessment && (
                <Card className={`p-8 bg-gradient-to-r ${stressAssessment.color} bg-opacity-10 border-2 border-white/10`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-14 h-14 bg-gradient-to-br ${stressAssessment.color} rounded-2xl flex items-center justify-center`}>
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">Your Stress Assessment Results</h3>
                        <p className="text-gray-400 text-sm mt-1">
                          Last taken: {new Date(stressAssessment.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </p>
                      </div>
                    </div>
                    <Link 
                      to="/stress-assessment?retake=true"
                      className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg text-sm font-semibold transition-all flex items-center space-x-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                      <span>Retake Assessment</span>
                    </Link>
                  </div>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="bg-white/5 p-4 rounded-xl">
                      <div className="text-gray-400 text-sm mb-1">Score</div>
                      <div className="text-3xl font-bold text-white">{stressAssessment.score}/40</div>
                    </div>
                    <div className="bg-white/5 p-4 rounded-xl">
                      <div className="text-gray-400 text-sm mb-1">Level</div>
                      <div className={`text-2xl font-bold bg-gradient-to-r ${stressAssessment.color} bg-clip-text text-transparent`}>
                        {stressAssessment.level}
                      </div>
                    </div>
                    <div className="bg-white/5 p-4 rounded-xl">
                      <div className="text-gray-400 text-sm mb-1">Range</div>
                      <div className="text-2xl font-bold text-white">{stressAssessment.category}</div>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm">{stressAssessment.description}</p>
                </Card>
              )}

              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-white">Recommended for You</h2>
                  <Link to="/therapy" className="text-vyoma-green hover:text-vyoma-lime transition-colors">
                    View All
                  </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {recommendedSessions.map((session) => (
                    <Link key={session.id} to={`/therapy/${session.id}`}>
                      <Card hover={true} className="p-6">
                        <div className="text-6xl mb-4">{session.thumbnail}</div>
                        <h3 className="text-xl font-bold text-white mb-2">{session.title}</h3>
                        <p className="text-gray-400 text-sm mb-4">{session.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-vyoma-green font-semibold">{session.duration}</span>
                          <div className="flex items-center space-x-1 text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Quick Start */}
              <Card className="p-8 bg-gradient-to-r from-vyoma-purple/20 to-vyoma-pink/20">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Ready for a session?</h3>
                    <p className="text-gray-400 mb-6">Jump back into your favorite therapy</p>
                    <Link to="/therapy" className="btn-primary">
                      Start Session
                    </Link>
                  </div>
                  <div className="hidden md:block text-8xl">🧘‍♀️</div>
                </div>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Recent Activity */}
              <Card className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">Recent Activity</h3>
                <div className="space-y-4">
                  {recentSessions.map((session) => (
                    <div key={session.id} className="flex items-start space-x-3 pb-4 border-b border-white/10 last:border-0 last:pb-0">
                      <div className="w-10 h-10 bg-gradient-to-br from-vyoma-purple to-vyoma-pink rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-semibold text-sm">{session.title}</h4>
                        <p className="text-gray-500 text-xs mt-1">{session.date} • {session.duration}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Daily Tip */}
              <Card className="p-6 bg-gradient-to-br from-vyoma-blue/20 to-vyoma-teal/20">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="text-2xl">💡</div>
                  <h3 className="text-lg font-bold text-white">Daily Tip</h3>
                </div>
                <p className="text-gray-300 text-sm">
                  Practice the 4-7-8 breathing technique: Inhale for 4 seconds, hold for 7, exhale for 8. Repeat 3 times for instant calm.
                </p>
              </Card>

              {/* Progress Chart Placeholder */}
              <Card className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">Your Progress</h3>
                <div className="h-48 flex items-center justify-center bg-white/5 rounded-lg">
                  <div className="text-center">
                    <svg className="w-16 h-16 mx-auto text-vyoma-green mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    <p className="text-gray-400 text-sm">Chart visualization coming soon</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      
      <style>{`
        @keyframes pulse-border {
          0%, 100% {
            border-color: rgba(168, 85, 247, 0.5);
            box-shadow: 0 0 0 0 rgba(168, 85, 247, 0.4);
          }
          50% {
            border-color: rgba(236, 72, 153, 0.8);
            box-shadow: 0 0 20px 5px rgba(236, 72, 153, 0.3);
          }
        }
        .animate-pulse-border {
          animation: pulse-border 2s ease-in-out infinite;
        }
      `}</style>
    </GridBackground>
  );
};

export default Dashboard;

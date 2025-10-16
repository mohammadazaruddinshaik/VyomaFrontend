import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import Button from '../components/Button';

const Onboarding = () => {
  const [step, setStep] = useState(1);
  const [assessment, setAssessment] = useState({
    stressLevel: 5,
    anxietyLevel: 5,
    sleepQuality: 5,
    goals: []
  });
  const navigate = useNavigate();

  const goals = [
    { id: 'stress', label: 'Reduce Stress', icon: '🧘' },
    { id: 'anxiety', label: 'Manage Anxiety', icon: '😌' },
    { id: 'sleep', label: 'Better Sleep', icon: '😴' },
    { id: 'focus', label: 'Improve Focus', icon: '🎯' },
    { id: 'mindfulness', label: 'Practice Mindfulness', icon: '🕉️' },
    { id: 'relaxation', label: 'Deep Relaxation', icon: '🌊' }
  ];

  const handleGoalToggle = (goalId) => {
    setAssessment(prev => ({
      ...prev,
      goals: prev.goals.includes(goalId)
        ? prev.goals.filter(g => g !== goalId)
        : [...prev.goals, goalId]
    }));
  };

  const handleComplete = () => {
    // Save assessment data
    localStorage.setItem('vyoma_assessment', JSON.stringify(assessment));
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-vyoma-dark py-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            Welcome to <span className="gradient-text">Vyoma</span>
          </h1>
          <p className="text-xl text-gray-400">
            Let's personalize your therapy experience
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="flex items-center justify-center mb-12">
          {[1, 2, 3].map((num) => (
            <React.Fragment key={num}>
              <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all ${
                step >= num ? 'bg-vyoma-green text-black' : 'bg-white/10 text-gray-500'
              }`}>
                {num}
              </div>
              {num < 3 && (
                <div className={`w-24 h-1 mx-2 transition-all ${
                  step > num ? 'bg-vyoma-green' : 'bg-white/10'
                }`}></div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Step 1: Guidelines */}
        {step === 1 && (
          <div className="space-y-6 animate-fade-in-up">
            <Card className="p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-vyoma-purple to-vyoma-pink rounded-2xl flex items-center justify-center text-3xl">
                  📋
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Guidelines</h2>
                  <p className="text-gray-400">How to get the most from Vyoma</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-vyoma-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Find a Quiet Space</h3>
                    <p className="text-gray-400 text-sm">Choose a comfortable, distraction-free environment for your sessions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-vyoma-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Use Headphones</h3>
                    <p className="text-gray-400 text-sm">For the best immersive experience, use quality headphones or VR audio</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-vyoma-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Practice Regularly</h3>
                    <p className="text-gray-400 text-sm">Consistency is key - aim for daily 10-15 minute sessions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-vyoma-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Be Patient</h3>
                    <p className="text-gray-400 text-sm">Mental wellness is a journey - results compound over time</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-r from-vyoma-purple/20 to-vyoma-pink/20">
              <h3 className="text-xl font-bold text-white mb-4">VR Compatibility Check</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-vyoma-green rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white">WebXR Supported</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-vyoma-green rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white">360° Video Ready</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-vyoma-green rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white">Desktop Compatible</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-vyoma-green rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white">Mobile VR Ready</span>
                </div>
              </div>
            </Card>

            <div className="flex justify-end">
              <Button onClick={() => setStep(2)} variant="primary">
                Continue
              </Button>
            </div>
          </div>
        )}

        {/* Step 2: Health Assessment */}
        {step === 2 && (
          <div className="space-y-8 animate-fade-in-up">
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Mental Health Assessment</h2>
              
              {/* Stress Level */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <label className="text-white font-medium">Current Stress Level</label>
                  <span className="text-vyoma-green font-bold text-lg">{assessment.stressLevel}/10</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={assessment.stressLevel}
                  onChange={(e) => setAssessment(prev => ({ ...prev, stressLevel: parseInt(e.target.value) }))}
                  className="w-full h-2 bg-white/20 rounded-full appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #BFFF00 0%, #BFFF00 ${assessment.stressLevel * 10}%, rgba(255,255,255,0.2) ${assessment.stressLevel * 10}%, rgba(255,255,255,0.2) 100%)`
                  }}
                />
                <div className="flex justify-between text-gray-500 text-xs mt-2">
                  <span>Low</span>
                  <span>High</span>
                </div>
              </div>

              {/* Anxiety Level */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <label className="text-white font-medium">Anxiety Level</label>
                  <span className="text-vyoma-pink font-bold text-lg">{assessment.anxietyLevel}/10</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={assessment.anxietyLevel}
                  onChange={(e) => setAssessment(prev => ({ ...prev, anxietyLevel: parseInt(e.target.value) }))}
                  className="w-full h-2 bg-white/20 rounded-full appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #EC4899 0%, #EC4899 ${assessment.anxietyLevel * 10}%, rgba(255,255,255,0.2) ${assessment.anxietyLevel * 10}%, rgba(255,255,255,0.2) 100%)`
                  }}
                />
                <div className="flex justify-between text-gray-500 text-xs mt-2">
                  <span>Low</span>
                  <span>High</span>
                </div>
              </div>

              {/* Sleep Quality */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-white font-medium">Sleep Quality</label>
                  <span className="text-vyoma-purple font-bold text-lg">{assessment.sleepQuality}/10</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={assessment.sleepQuality}
                  onChange={(e) => setAssessment(prev => ({ ...prev, sleepQuality: parseInt(e.target.value) }))}
                  className="w-full h-2 bg-white/20 rounded-full appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #8B5CF6 0%, #8B5CF6 ${assessment.sleepQuality * 10}%, rgba(255,255,255,0.2) ${assessment.sleepQuality * 10}%, rgba(255,255,255,0.2) 100%)`
                  }}
                />
                <div className="flex justify-between text-gray-500 text-xs mt-2">
                  <span>Poor</span>
                  <span>Excellent</span>
                </div>
              </div>
            </Card>

            <div className="flex justify-between">
              <Button onClick={() => setStep(1)} variant="secondary">
                Back
              </Button>
              <Button onClick={() => setStep(3)} variant="primary">
                Continue
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Goals Selection */}
        {step === 3 && (
          <div className="space-y-8 animate-fade-in-up">
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-white mb-4">What are your wellness goals?</h2>
              <p className="text-gray-400 mb-8">Select all that apply</p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {goals.map((goal) => (
                  <button
                    key={goal.id}
                    onClick={() => handleGoalToggle(goal.id)}
                    className={`p-6 rounded-2xl border-2 transition-all ${
                      assessment.goals.includes(goal.id)
                        ? 'border-vyoma-green bg-vyoma-green/20'
                        : 'border-white/20 glass hover:border-white/40'
                    }`}
                  >
                    <div className="text-4xl mb-3">{goal.icon}</div>
                    <div className="text-white font-semibold">{goal.label}</div>
                  </button>
                ))}
              </div>
            </Card>

            <div className="flex justify-between">
              <Button onClick={() => setStep(2)} variant="secondary">
                Back
              </Button>
              <Button 
                onClick={handleComplete} 
                variant="primary"
                disabled={assessment.goals.length === 0}
              >
                Complete Setup
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Onboarding;

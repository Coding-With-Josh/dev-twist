'use client';

import { useState } from 'react';

const Onboarding = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: 'Welcome to our app!',
      description: 'This is the first step of our onboarding process.',
    },
    {
      title: 'Create your account',
      description: 'This is the second step of our onboarding process.',
    },
    {
      title: 'Set up your profile',
      description: 'This is the third step of our onboarding process.',
    },
  ];

  return (
    <div className='flex items-center justify-center w-screen h-screen bg-background'>
      <div className="p-12 max-w-md mx-auto p-4 border-2 bg-card border-accent rounded-lg shadow-md">
        <div className="flex justify-between mb-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`w-full text-center ${
                activeStep === index ? 'text-primary' : 'text-gray-500'
              }`}
            >
              <div
                className={`h-2 w-2 mx-auto rounded-full ${
                  activeStep === index ? 'bg-primary' : 'bg-gray-500'
                }`}
              />
              <p className="text-lg">{step.title}</p>
            </div>
          ))}
        </div>
        <div className="p-4 bg-gray-100 rounded-lg shadow-md">
          <p className="text-lg">{steps[activeStep].description}</p>
        </div>
        <div className="flex justify-between mt-4">
          {activeStep > 0 && (
            <button
              className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => setActiveStep(activeStep - 1)}
            >
              Previous
            </button>
          )}
          {activeStep < steps.length - 1 && (
            <button
              className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => setActiveStep(activeStep + 1)}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Onboarding;

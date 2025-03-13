import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    alxAffiliation: '',
    teamStatus: '',
    strengths: '',
    roleType: ''
  });
  const [status, setStatus] = useState({
    type: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    // Clear error when user starts typing
    if (status.type === 'error') {
      setStatus({ type: '', message: '' });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = 'Phone number is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.alxAffiliation) newErrors.alxAffiliation = 'ALX Affiliation is required';
    if (!formData.teamStatus) newErrors.teamStatus = 'Team Status is required';
    if (!formData.strengths.trim()) newErrors.strengths = 'Strengths/Background is required';
    if (!formData.roleType) newErrors.roleType = 'Role Type is required';

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setStatus({
        type: 'error',
        message: 'Please fill in all required fields correctly'
      });
      return;
    }

    try {
      const response = await fetch('http://localhost:8000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setShowSuccess(true);
        // Clear form data
        setFormData({
          fullName: '',
          phoneNumber: '',
          email: '',
          alxAffiliation: '',
          teamStatus: '',
          strengths: '',
          roleType: ''
        });
      } else {
        const data = await response.json();
        setStatus({
          type: 'error',
          message: data.message || 'Registration failed. Please try again.'
        });
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Network error. Please try again later.'
      });
    }
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow-lg sm:rounded-lg sm:px-10 text-center">
            <div className="mb-6">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-blue-100">
                <svg className="h-10 w-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Registration Successful!</h2>
            <p className="text-gray-600 mb-8">
              Thank you for registering for the ALX Hackathon! We're excited to have you join us. 
              You will receive a confirmation email with further details shortly.
            </p>
            <div className="space-y-4">
              <button
                onClick={() => navigate('/')}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Return to Home
              </button>
              <button
                onClick={() => setShowSuccess(false)}
                className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Register Another Person
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Register for Hackathon</h2>
        
        {status.message && (
          <div className={`mb-6 p-4 rounded-md ${status.type === 'error' ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'}`}>
            {status.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name *</label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="mt-1 block w-full rounded-lg border border-gray-300 bg-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2.5 hover:border-blue-400 transition-colors duration-200"
            />
          </div>

          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number *</label>
            <input
              type="tel"
              name="phoneNumber"
              id="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="mt-1 block w-full rounded-lg border border-gray-300 bg-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2.5 hover:border-blue-400 transition-colors duration-200"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address *</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full rounded-lg border border-gray-300 bg-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2.5 hover:border-blue-400 transition-colors duration-200"
            />
          </div>

          <div>
            <label htmlFor="alxAffiliation" className="block text-sm font-medium text-gray-700">ALX Affiliation *</label>
            <select
              name="alxAffiliation"
              id="alxAffiliation"
              value={formData.alxAffiliation}
              onChange={handleChange}
              className="mt-1 block w-full rounded-lg border border-gray-300 bg-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2.5 hover:border-blue-400 transition-colors duration-200"
            >
              <option value="">Select your affiliation</option>
              <option value="Learner">Learner</option>
              <option value="Graduate">Graduate</option>
              <option value="Neither">Neither</option>
            </select>
          </div>

          <div>
            <label htmlFor="teamStatus" className="block text-sm font-medium text-gray-700">Team Status *</label>
            <select
              name="teamStatus"
              id="teamStatus"
              value={formData.teamStatus}
              onChange={handleChange}
              className="mt-1 block w-full rounded-lg border border-gray-300 bg-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2.5 hover:border-blue-400 transition-colors duration-200"
            >
              <option value="">Select your team status</option>
              <option value="Already has a team">Already has a team</option>
              <option value="Seeking teammates">Seeking teammates</option>
            </select>
          </div>

          <div>
            <label htmlFor="strengths" className="block text-sm font-medium text-gray-700">Strengths/Background *</label>
            <textarea
              name="strengths"
              id="strengths"
              rows="3"
              value={formData.strengths}
              onChange={handleChange}
              placeholder="Describe your skills, experience, and what you can bring to a team"
              className="mt-1 block w-full rounded-lg border border-gray-300 bg-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2.5 hover:border-blue-400 transition-colors duration-200"
            />
          </div>

          <div>
            <label htmlFor="roleType" className="block text-sm font-medium text-gray-700">Role Type *</label>
            <select
              name="roleType"
              id="roleType"
              value={formData.roleType}
              onChange={handleChange}
              className="mt-1 block w-full rounded-lg border border-gray-300 bg-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2.5 hover:border-blue-400 transition-colors duration-200"
            >
              <option value="">Select your role</option>
              <option value="Developer">Developer</option>
              <option value="Creative">Creative</option>
              <option value="Manager">Manager</option>
              <option value="Entrepreneur">Entrepreneur</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform hover:scale-[1.02] transition-all duration-200"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
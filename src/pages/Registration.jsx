import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const navigate = useNavigate();
  const [registrationType, setRegistrationType] = useState('individual');
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    alxAffiliation: '',
    teamName: '',
    strengths: '',
    roleType: '',
    teamMembers: [
      { fullName: '', email: '', phoneNumber: '', roleType: '' }
    ]
  });
  const [status, setStatus] = useState({
    type: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleRegistrationTypeChange = (type) => {
    setRegistrationType(type);
    // Reset form data when switching registration type
    setFormData({
      fullName: '',
      phoneNumber: '',
      email: '',
      alxAffiliation: '',
      teamName: '',
      strengths: '',
      roleType: '',
      teamMembers: [
        { fullName: '', email: '', phoneNumber: '', roleType: '' }
      ]
    });
    setStatus({ type: '', message: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    if (status.type === 'error') {
      setStatus({ type: '', message: '' });
    }
  };

  const handleTeamMemberChange = (index, e) => {
    const { name, value } = e.target;
    const updatedTeamMembers = [...formData.teamMembers];
    updatedTeamMembers[index] = {
      ...updatedTeamMembers[index],
      [name]: value
    };
    setFormData(prevState => ({
      ...prevState,
      teamMembers: updatedTeamMembers
    }));
  };

  const addTeamMember = () => {
    if (formData.teamMembers.length < 4) {
      setFormData(prevState => ({
        ...prevState,
        teamMembers: [
          ...prevState.teamMembers,
          { fullName: '', email: '', phoneNumber: '', roleType: '' }
        ]
      }));
    } else {
      setStatus({
        type: 'error',
        message: 'Maximum of 5 team members allowed (including team lead)'
      });
    }
  };

  const removeTeamMember = (index) => {
    const updatedTeamMembers = [...formData.teamMembers];
    updatedTeamMembers.splice(index, 1);
    setFormData(prevState => ({
      ...prevState,
      teamMembers: updatedTeamMembers
    }));
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
    if (!formData.strengths.trim()) newErrors.strengths = 'Strengths/Background is required';
    if (!formData.roleType) newErrors.roleType = 'Role Type is required';

    if (registrationType === 'team') {
      if (!formData.teamName.trim()) newErrors.teamName = 'Team name is required';
      
      formData.teamMembers.forEach((member, index) => {
        if (index > 0) {
          if (!member.fullName.trim()) newErrors[`teamMember${index}Name`] = 'Team member name is required';
          if (!member.email.trim()) {
            newErrors[`teamMember${index}Email`] = 'Team member email is required';
          } else if (!/\S+@\S+\.\S+/.test(member.email)) {
            newErrors[`teamMember${index}Email`] = 'Team member email is invalid';
          }
          if (!member.phoneNumber.trim()) newErrors[`teamMember${index}Phone`] = 'Team member phone is required';
          if (!member.roleType) newErrors[`teamMember${index}Role`] = 'Team member role is required';
        }
      });
    }

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
      const response = await fetch('https://alx-hackathon-api.sumeyaakmel519.workers.dev/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          registrationType,
          teamMembers: registrationType === 'team' ? formData.teamMembers : []
        }),
      });

      if (response.ok) {
        setShowSuccess(true);
        setFormData({
          fullName: '',
          phoneNumber: '',
          email: '',
          alxAffiliation: '',
          teamName: '',
          strengths: '',
          roleType: '',
          teamMembers: [
            { fullName: '', email: '', phoneNumber: '', roleType: '' }
          ]
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
              {registrationType === 'team' 
                ? "Thank you for registering your team for the ALX Hackathon! You and your team members will receive confirmation emails with QR codes shortly."
                : "Thank you for registering for the ALX Hackathon! You will receive a confirmation email with your QR code shortly."}
            </p>
            <div className="space-y-4">
              <button
                onClick={() => navigate('/')}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Return to Home
              </button>
              <button
                onClick={() => {
                  setShowSuccess(false);
                  setRegistrationType('individual');
                }}
                className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Register Another Participant
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Register for ALX Hackathon</h2>
        
        <div className="mb-8">
          <div className="flex justify-center space-x-4">
            <button
              type="button"
              onClick={() => handleRegistrationTypeChange('individual')}
              className={`px-6 py-3 rounded-lg font-medium ${
                registrationType === 'individual'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Individual Registration
            </button>
            <button
              type="button"
              onClick={() => handleRegistrationTypeChange('team')}
              className={`px-6 py-3 rounded-lg font-medium ${
                registrationType === 'team'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Team Registration
            </button>
          </div>
        </div>

        {status.message && (
          <div className={`mb-6 p-4 rounded-md ${status.type === 'error' ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'}`}>
            {status.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className={`bg-blue-50 p-4 rounded-md mb-6`}>
            <h3 className="text-xl font-semibold text-blue-800 mb-4">
              {registrationType === 'team' ? 'Team Lead Information' : 'Personal Information'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

              {registrationType === 'team' && (
                <div>
                  <label htmlFor="teamName" className="block text-sm font-medium text-gray-700">Team Name *</label>
                  <input
                    type="text"
                    name="teamName"
                    id="teamName"
                    value={formData.teamName}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-lg border border-gray-300 bg-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2.5 hover:border-blue-400 transition-colors duration-200"
                  />
                </div>
              )}

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
            </div>

            <div className="mt-4">
              <label htmlFor="strengths" className="block text-sm font-medium text-gray-700">Strengths/Background *</label>
              <textarea
                name="strengths"
                id="strengths"
                rows="3"
                value={formData.strengths}
                onChange={handleChange}
                placeholder="Describe your skills, experience, and what you can bring to the hackathon"
                className="mt-1 block w-full rounded-lg border border-gray-300 bg-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2.5 hover:border-blue-400 transition-colors duration-200"
              />
            </div>
          </div>

          {registrationType === 'team' && (
            <div className="bg-gray-50 p-4 rounded-md">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-gray-800">Team Members (Max 4 Additional Members)</h3>
                <button
                  type="button"
                  onClick={addTeamMember}
                  className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Add Team Member
                </button>
              </div>

              {formData.teamMembers.map((member, index) => (
                index === 0 ? null : (
                  <div key={index} className="mb-6 p-4 border border-gray-200 rounded-md">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="font-medium text-gray-700">Team Member #{index}</h4>
                      <button
                        type="button"
                        onClick={() => removeTeamMember(index)}
                        className="text-red-500 hover:text-red-700"
                      >
                        Remove
                      </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor={`member-${index}-name`} className="block text-sm font-medium text-gray-700">Full Name *</label>
                        <input
                          type="text"
                          name="fullName"
                          id={`member-${index}-name`}
                          value={member.fullName}
                          onChange={(e) => handleTeamMemberChange(index, e)}
                          className="mt-1 block w-full rounded-lg border border-gray-300 bg-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2.5"
                        />
                      </div>
                      <div>
                        <label htmlFor={`member-${index}-email`} className="block text-sm font-medium text-gray-700">Email *</label>
                        <input
                          type="email"
                          name="email"
                          id={`member-${index}-email`}
                          value={member.email}
                          onChange={(e) => handleTeamMemberChange(index, e)}
                          className="mt-1 block w-full rounded-lg border border-gray-300 bg-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2.5"
                        />
                      </div>
                      <div>
                        <label htmlFor={`member-${index}-phone`} className="block text-sm font-medium text-gray-700">Phone Number *</label>
                        <input
                          type="tel"
                          name="phoneNumber"
                          id={`member-${index}-phone`}
                          value={member.phoneNumber}
                          onChange={(e) => handleTeamMemberChange(index, e)}
                          className="mt-1 block w-full rounded-lg border border-gray-300 bg-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2.5"
                        />
                      </div>
                      <div>
                        <label htmlFor={`member-${index}-role`} className="block text-sm font-medium text-gray-700">Role *</label>
                        <select
                          name="roleType"
                          id={`member-${index}-role`}
                          value={member.roleType}
                          onChange={(e) => handleTeamMemberChange(index, e)}
                          className="mt-1 block w-full rounded-lg border border-gray-300 bg-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2.5"
                        >
                          <option value="">Select role</option>
                          <option value="Developer">Developer</option>
                          <option value="Creative">Creative</option>
                          <option value="Manager">Manager</option>
                          <option value="Entrepreneur">Entrepreneur</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )
              ))}
            </div>
          )}

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform hover:scale-[1.02] transition-all duration-200"
            >
              {registrationType === 'team' ? 'Register Team' : 'Register'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
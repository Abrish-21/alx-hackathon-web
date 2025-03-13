import React, { useState, useEffect } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';

const CheckIn = () => {
  const [scanResult, setScanResult] = useState(null);
  const [stats, setStats] = useState({
    total: 0,
    checkedIn: 0,
    remaining: 0
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [manualTicket, setManualTicket] = useState('');

  useEffect(() => {
    fetchStats();
    
    // Initialize QR Scanner
    const scanner = new Html5QrcodeScanner('qr-reader', {
      qrbox: {
        width: 250,
        height: 250,
      },
      fps: 5,
    });

    scanner.render(onScanSuccess, onScanError);

    // Cleanup scanner on component unmount
    return () => {
      scanner.clear();
    };
  }, []);

  const fetchStats = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/checkin/stats');
      const data = await response.json();
      setStats(data);
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

  const onScanSuccess = async (decodedText) => {
    try {
      const qrData = JSON.parse(decodedText);
      await processCheckIn(qrData.ticketNumber);
    } catch (error) {
      setError('Invalid QR code');
      setTimeout(() => setError(''), 3000);
    }
  };

  const onScanError = (err) => {
    console.warn(err);
  };

  const handleManualSubmit = async (e) => {
    e.preventDefault();
    if (manualTicket.trim()) {
      await processCheckIn(manualTicket.trim());
      setManualTicket('');
    }
  };

  const processCheckIn = async (ticketNumber) => {
    try {
      const response = await fetch('http://localhost:8000/api/checkin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ticketNumber }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(`Successfully checked in ${data.user.fullName}`);
        setScanResult(data.user);
        fetchStats(); // Update stats after successful check-in
        setTimeout(() => setSuccess(''), 3000);
      } else {
        setError(data.message);
        setTimeout(() => setError(''), 3000);
      }
    } catch (error) {
      setError('Error processing check-in');
      setTimeout(() => setError(''), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Event Check-In</h1>
          <p className="mt-2 text-gray-600">Scan participant QR codes or enter ticket numbers manually</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-medium text-gray-900">Total Registered</h3>
            <p className="mt-2 text-3xl font-bold text-blue-600">{stats.total}</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-medium text-gray-900">Checked In</h3>
            <p className="mt-2 text-3xl font-bold text-green-600">{stats.checkedIn}</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-medium text-gray-900">Remaining</h3>
            <p className="mt-2 text-3xl font-bold text-orange-600">{stats.remaining}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* QR Scanner */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">QR Code Scanner</h2>
            <div id="qr-reader" className="rounded-lg overflow-hidden"></div>
          </div>

          {/* Manual Entry and Results */}
          <div className="space-y-6">
            {/* Manual Ticket Entry */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Manual Check-In</h2>
              <form onSubmit={handleManualSubmit} className="space-y-4">
                <div>
                  <label htmlFor="ticketNumber" className="block text-sm font-medium text-gray-700">
                    Ticket Number
                  </label>
                  <input
                    type="text"
                    id="ticketNumber"
                    value={manualTicket}
                    onChange={(e) => setManualTicket(e.target.value)}
                    className="mt-1 block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="Enter ticket number"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Check In
                </button>
              </form>
            </div>

            {/* Status Messages */}
            {(error || success) && (
              <div className={`rounded-lg p-4 ${error ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'}`}>
                {error || success}
              </div>
            )}

            {/* Scan Result */}
            {scanResult && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4">Last Check-In</h2>
                <div className="space-y-2">
                  <p><strong>Name:</strong> {scanResult.fullName}</p>
                  <p><strong>Email:</strong> {scanResult.email}</p>
                  <p><strong>Ticket:</strong> {scanResult.ticketNumber}</p>
                  <p><strong>Time:</strong> {new Date(scanResult.checkInTime).toLocaleString()}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckIn;

"use client";

import { useState } from 'react';

export default function TreasuryDashboard() {
  const [paymentAmount, setPaymentAmount] = useState('');

  const handleSchedule = () => {
    alert(`Scheduled payment of ${paymentAmount} (demo)`);
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Institutional Treasury</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 border rounded-2xl">
          <h2 className="font-semibold mb-4">Schedule Payment</h2>
          <input
            type="text"
            value={paymentAmount}
            onChange={(e) => setPaymentAmount(e.target.value)}
            className="w-full p-4 border rounded-2xl mb-4"
            placeholder="Amount"
          />
          <button onClick={handleSchedule} className="w-full bg-purple-600 text-white py-3 rounded-2xl">
            Schedule Payment
          </button>
        </div>

        <div className="p-6 border rounded-2xl">
          <h2 className="font-semibold mb-4">Multi-sig Status</h2>
          <p className="text-gray-600">2 of 3 approvals required</p>
          <div className="mt-4 text-sm">Pending approvals: 1</div>
        </div>
      </div>
    </div>
  );
}
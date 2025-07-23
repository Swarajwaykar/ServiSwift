import React, { useState } from "react";
import {
  createPayment,
  getPaymentById,
  proceedPayment,
} from "../api/paymentApi";

const PaymentPage = () => {
  const [payment, setPayment] = useState<any>(null);
  const [id, setId] = useState("");
  const [form, setForm] = useState({
    amount: "",
    bookingId: "",
  });

  const handleCreate = async () => {
    try {
      const res = await createPayment(form);
      setPayment(res.data);
    } catch (err) {
      alert("❌ Error creating payment.");
    }
  };

  const handleFetch = async () => {
    try {
      const res = await getPaymentById(Number(id));
      setPayment(res.data);
    } catch {
      alert("⚠️ Payment not found");
    }
  };

  const handleProceed = async () => {
    try {
      const res = await proceedPayment(Number(id));
      setPayment(res.data);
    } catch {
      alert("❌ Failed to proceed payment");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-indigo-50 via-purple-50 to-pink-50 p-6">
      <div className="max-w-2xl mx-auto bg-white shadow-xl rounded-xl p-8">
        <h1 className="text-3xl font-bold text-indigo-700 mb-8 text-center">
          💳 Payment Service Dashboard
        </h1>

        {/* CREATE PAYMENT */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-700 mb-4 border-b pb-2">Create Payment Link</h2>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Booking ID"
              value={form.bookingId}
              onChange={(e) => setForm({ ...form, bookingId: e.target.value })}
              className="input-field"
            />
            <input
              type="number"
              placeholder="Amount (₹)"
              value={form.amount}
              onChange={(e) => setForm({ ...form, amount: e.target.value })}
              className="input-field"
            />
            <button
              onClick={handleCreate}
              className="btn-primary"
            >
              ➕ Create Payment
            </button>
          </div>
        </section>

        {/* FETCH / PROCEED PAYMENT */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-700 mb-4 border-b pb-2">Manage Existing Payment</h2>
          <div className="space-y-4">
            <input
              type="number"
              placeholder="Enter Payment ID"
              value={id}
              onChange={(e) => setId(e.target.value)}
              className="input-field"
            />
            <div className="flex gap-4">
              <button onClick={handleFetch} className="btn-secondary w-full">
                🔍 Get Payment
              </button>
              <button onClick={handleProceed} className="btn-primary w-full">
                ✅ Proceed Payment
              </button>
            </div>
          </div>
        </section>

        {/* PAYMENT DETAILS */}
        {payment && (
          <section className="bg-gray-100 p-6 rounded-lg shadow-inner">
            <h3 className="text-lg font-bold text-gray-800 mb-2">🧾 Payment Details</h3>
            <pre className="text-sm text-gray-700 overflow-x-auto">
              {JSON.stringify(payment, null, 2)}
            </pre>
          </section>
        )}
      </div>
    </div>
  );
};

export default PaymentPage;

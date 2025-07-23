import React, { useState } from "react";
import {
  createBooking,
  getBookingsByCustomer,
  getBookingsBySalon,
  getBookingsByDate,
  getBookingById,
  updateBookingStatus,
} from "../api/bookingApi";
import { FiCalendar, FiUser, FiClock, FiPlus, FiSearch, FiEdit3 } from "react-icons/fi";

const BookingPage = () => {
  const [form, setForm] = useState({
    customerId: "",
    salonId: "",
    serviceId: "",
    bookingDate: "",
    slot: "",
  });
  const [bookings, setBookings] = useState([]);
  const [id, setId] = useState("");
  const [status, setStatus] = useState("");
  const [singleBooking, setSingleBooking] = useState<any>(null);

  const handleCreate = async () => {
    try {
      const res = await createBooking(form);
      alert("Booking created!");
      setSingleBooking(res.data);
    } catch {
      alert("Failed to create booking");
    }
  };

  const fetchByCustomer = async () => {
    const res = await getBookingsByCustomer(Number(form.customerId));
    setBookings(res.data);
  };

  const fetchBySalon = async () => {
    const res = await getBookingsBySalon(Number(form.salonId));
    setBookings(res.data);
  };

  const fetchByDate = async () => {
    const res = await getBookingsByDate(Number(form.salonId), form.bookingDate);
    setBookings(res.data);
  };

  const fetchById = async () => {
    const res = await getBookingById(Number(id));
    setSingleBooking(res.data);
  };

  const updateStatus = async () => {
    const res = await updateBookingStatus(Number(id), status);
    setSingleBooking(res.data);
  };

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-10">
      <h1 className="text-3xl font-bold text-indigo-700 flex items-center gap-2">
        <FiCalendar className="text-indigo-500" /> Manage Bookings
      </h1>

      {/* Create Booking */}
      <section className="bg-white shadow rounded-lg p-6 space-y-4">
        <h2 className="text-xl font-semibold text-gray-700 flex items-center gap-2">
          <FiPlus /> Create New Booking
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { name: "customerId", placeholder: "Customer ID" },
            { name: "salonId", placeholder: "Salon ID" },
            { name: "serviceId", placeholder: "Service ID" },
            { name: "slot", placeholder: "Slot (e.g. 11:00 - 12:00)" },
          ].map((field) => (
            <input
              key={field.name}
              className="p-2 border rounded w-full"
              placeholder={field.placeholder}
              value={form[field.name as keyof typeof form]}
              onChange={(e) =>
                setForm({ ...form, [field.name]: e.target.value })
              }
            />
          ))}
          <input
            type="date"
            className="p-2 border rounded w-full"
            value={form.bookingDate}
            onChange={(e) => setForm({ ...form, bookingDate: e.target.value })}
          />
        </div>
        <button
          onClick={handleCreate}
          className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition"
        >
          Create Booking
        </button>
      </section>

      {/* Filters */}
      <section className="bg-white shadow rounded-lg p-6 space-y-4">
        <h2 className="text-xl font-semibold text-gray-700 flex items-center gap-2">
          <FiSearch /> Search Bookings
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          <button onClick={fetchByCustomer} className="btn-secondary">
            By Customer ID
          </button>
          <button onClick={fetchBySalon} className="btn-secondary">
            By Salon ID
          </button>
          <button onClick={fetchByDate} className="btn-secondary">
            By Date
          </button>
        </div>
      </section>

      {/* Get & Update by ID */}
      <section className="bg-white shadow rounded-lg p-6 space-y-4">
        <h2 className="text-xl font-semibold text-gray-700 flex items-center gap-2">
          <FiEdit3 /> Manage by Booking ID
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="number"
            className="p-2 border rounded"
            placeholder="Booking ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <input
            className="p-2 border rounded"
            placeholder="New Status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
        </div>
        <div className="flex gap-4">
          <button onClick={fetchById} className="btn-secondary">
            Get Booking
          </button>
          <button onClick={updateStatus} className="btn-primary">
            Update Status
          </button>
        </div>
      </section>

      {/* Single Booking */}
      {singleBooking && (
        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Booking Details</h2>
          <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
            {JSON.stringify(singleBooking, null, 2)}
          </pre>
        </section>
      )}

      {/* Booking List */}
      {bookings.length > 0 && (
        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">All Bookings</h2>
          <div className="grid gap-4">
            {bookings.map((b: any, i) => (
              <div
                key={i}
                className="border rounded p-4 bg-gray-50 hover:bg-gray-100 transition"
              >
                <p className="font-medium text-indigo-600">#{b.id}</p>
                <p className="text-sm text-gray-600">
                  Customer: {b.customerId} | Salon: {b.salonId} | Status:{" "}
                  <span className="font-semibold text-green-700">{b.status}</span>
                </p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default BookingPage;

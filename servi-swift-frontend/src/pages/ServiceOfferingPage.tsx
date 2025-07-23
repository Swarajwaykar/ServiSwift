import React, { useEffect, useState } from "react";
import {
  getAllOfferings,
  createOffering,
  updateOffering,
  deleteOffering,
} from "../api/offeringApi";

const ServiceOfferingPage = () => {
  const [offerings, setOfferings] = useState<any[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    categoryId: "",
    salonId: "",
  });

  const [editId, setEditId] = useState<number | null>(null);

  useEffect(() => {
    loadOfferings();
  }, []);

  const loadOfferings = async () => {
    const res = await getAllOfferings();
    setOfferings(res.data);
  };

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (editId) {
      await updateOffering(editId, formData);
    } else {
      await createOffering(formData);
    }
    setFormData({ name: "", description: "", price: "", categoryId: "", salonId: "" });
    setEditId(null);
    loadOfferings();
  };

  const handleEdit = (offer: any) => {
    setFormData(offer);
    setEditId(offer.id);
  };

  const handleDelete = async (id: number) => {
    if (window.confirm("Are you sure you want to delete this offering?")) {
      await deleteOffering(id);
      loadOfferings();
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Service Offerings</h1>

      <form className="grid gap-4 mb-6" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="p-2 border rounded"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          className="p-2 border rounded"
          value={formData.description}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          className="p-2 border rounded"
          value={formData.price}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="categoryId"
          placeholder="Category ID"
          className="p-2 border rounded"
          value={formData.categoryId}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="salonId"
          placeholder="Salon ID"
          className="p-2 border rounded"
          value={formData.salonId}
          onChange={handleChange}
          required
        />
        <button type="submit" className="btn-primary">
          {editId ? "Update Offering" : "Create Offering"}
        </button>
      </form>

      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">ID</th>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Price</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {offerings.map((offer) => (
            <tr key={offer.id}>
              <td className="p-2 border">{offer.id}</td>
              <td className="p-2 border">{offer.name}</td>
              <td className="p-2 border">₹{offer.price}</td>
              <td className="p-2 border">
                <button
                  onClick={() => handleEdit(offer)}
                  className="text-blue-500 hover:underline mr-4"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(offer.id)}
                  className="text-red-500 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServiceOfferingPage;

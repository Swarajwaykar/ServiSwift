import React, { useState, useEffect } from "react";

interface UserFormProps {
  onSubmit: (data: any) => void;
  editingUser: any | null;
}

const UserForm: React.FC<UserFormProps> = ({ onSubmit, editingUser }) => {
  const [formData, setFormData] = useState({ name: "", email: "" });

  useEffect(() => {
    if (editingUser) setFormData(editingUser);
  }, [editingUser]);

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ name: "", email: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        className="border p-2 w-full"
        type="text"
        name="name"
        value={formData.name}
        placeholder="Name"
        onChange={handleChange}
        required
      />
      <input
        className="border p-2 w-full"
        type="email"
        name="email"
        value={formData.email}
        placeholder="Email"
        onChange={handleChange}
        required
      />
      <button className="btn-primary" type="submit">
        {editingUser ? "Update" : "Create"}
      </button>
    </form>
  );
};

export default UserForm;

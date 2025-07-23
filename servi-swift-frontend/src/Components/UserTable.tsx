import React from "react";

const UserTable = ({ users, onEdit, onDelete }: any) => {
  return (
    <table className="w-full mt-6 table-auto border-collapse">
      <thead>
        <tr className="bg-indigo-100">
          <th className="p-2 border">ID</th>
          <th className="p-2 border">Name</th>
          <th className="p-2 border">Email</th>
          <th className="p-2 border">Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user: any) => (
          <tr key={user.id} className="text-center">
            <td className="p-2 border">{user.id}</td>
            <td className="p-2 border">{user.name}</td>
            <td className="p-2 border">{user.email}</td>
            <td className="p-2 border space-x-2">
              <button className="text-blue-600" onClick={() => onEdit(user)}>Edit</button>
              <button className="text-red-600" onClick={() => onDelete(user.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;

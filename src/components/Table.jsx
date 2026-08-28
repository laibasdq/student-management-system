import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiEye,
  FiEdit,
  FiTrash2,
} from "react-icons/fi";

import Modal from "./Modal";
import EmptyState from "./EmptyState";

function Table({ students, onDelete }) {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  // Student selected for deletion
  const [selectedStudent, setSelectedStudent] = useState(null);

  // =========================
  // SEARCH + FILTER
  // =========================
  const filteredStudents = students.filter((student) => {
    const studentName = student.name || "";
    const studentEmail = student.email || "";

    const matchesSearch =
      studentName
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      studentEmail
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesStatus =
      status === "All" || student.status === status;

    return matchesSearch && matchesStatus;
  });

  // =========================
  // VIEW STUDENT
  // =========================
  const handleView = (student) => {
    alert(
      `Student Details\n\nName: ${student.name}\nEmail: ${student.email}\nPhone: ${student.phone || "N/A"}\nClass: ${student.class || "N/A"}\nAge: ${student.age || "N/A"}\nStatus: ${student.status || "N/A"}`
    );
  };

  // =========================
  // OPEN DELETE MODAL
  // =========================
  const handleDeleteClick = (student) => {
    setSelectedStudent(student);
  };

  // =========================
  // CONFIRM DELETE
  // =========================
  const handleConfirmDelete = () => {
    if (selectedStudent) {
      onDelete(selectedStudent.id);
      setSelectedStudent(null);
    }
  };

  return (
    <>
      {/* =========================
          TABLE CONTAINER
      ========================= */}
      <div className="rounded-xl border border-gray-200 bg-white shadow-sm">

        {/* =========================
            SEARCH + FILTER
        ========================= */}
        <div className="flex flex-col gap-4 border-b border-gray-200 p-5 md:flex-row md:items-center md:justify-between">

          {/* Search */}
          <div className="w-full md:w-80">
            <input
              type="text"
              placeholder="Search students..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {/* Status Filter */}
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 md:w-48"
          >
            <option value="All">All Status</option>
            <option value="Active">Active</option>
            <option value="Pending">Pending</option>
            <option value="Inactive">Inactive</option>
          </select>

        </div>

        {/* =========================
            RESPONSIVE TABLE
        ========================= */}
        <div className="overflow-x-auto">

          <table className="w-full min-w-[1000px] text-left">

            {/* =========================
                TABLE HEADER
            ========================= */}
            <thead className="bg-gray-50">

              <tr>

                <th className="px-5 py-4 text-sm font-semibold text-gray-600">
                  Student
                </th>

                <th className="px-5 py-4 text-sm font-semibold text-gray-600">
                  Email
                </th>

                <th className="px-5 py-4 text-sm font-semibold text-gray-600">
                  Phone
                </th>

                <th className="px-5 py-4 text-sm font-semibold text-gray-600">
                  Class
                </th>

                <th className="px-5 py-4 text-sm font-semibold text-gray-600">
                  Age
                </th>

                <th className="px-5 py-4 text-sm font-semibold text-gray-600">
                  Status
                </th>

                <th className="px-5 py-4 text-sm font-semibold text-gray-600">
                  Actions
                </th>

              </tr>

            </thead>

            {/* =========================
                TABLE BODY
            ========================= */}
            <tbody>

              {filteredStudents.map((student) => (

                <tr
                  key={student.id}
                  className="border-t border-gray-100 transition hover:bg-gray-50"
                >

                  {/* =========================
                      STUDENT
                  ========================= */}
                  <td className="px-5 py-4">

                    <div className="flex items-center gap-3">

                      <img
                        src={
                          student.image ||
                          "https://via.placeholder.com/40"
                        }
                        alt={student.name}
                        className="h-10 w-10 rounded-full object-cover"
                      />

                      <div>

                        <p className="font-medium text-gray-800">
                          {student.name}
                        </p>

                        <p className="text-sm text-gray-500">
                          ID: {student.id}
                        </p>

                      </div>

                    </div>

                  </td>

                  {/* =========================
                      EMAIL
                  ========================= */}
                  <td className="px-5 py-4 text-sm text-gray-600">
                    {student.email}
                  </td>

                  {/* =========================
                      PHONE
                  ========================= */}
                  <td className="px-5 py-4 text-sm text-gray-600">
                    {student.phone || "N/A"}
                  </td>

                  {/* =========================
                      CLASS
                  ========================= */}
                  <td className="px-5 py-4 text-sm text-gray-600">
                    {student.class || "N/A"}
                  </td>

                  {/* =========================
                      AGE
                  ========================= */}
                  <td className="px-5 py-4 text-sm text-gray-600">
                    {student.age || "N/A"}
                  </td>

                  {/* =========================
                      STATUS
                  ========================= */}
                  <td className="px-5 py-4">

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        student.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : student.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {student.status || "Inactive"}
                    </span>

                  </td>

                  {/* =========================
                      ACTIONS
                  ========================= */}
                  <td className="px-5 py-4">

                    <div className="flex gap-2">

                      {/* VIEW */}
                      <button
                        type="button"
                        onClick={() => handleView(student)}
                        title="View Student"
                        className="flex items-center gap-1.5 rounded-md bg-blue-50 px-3 py-2 text-sm font-medium text-blue-600 transition hover:bg-blue-100"
                      >
                        <FiEye size={16} />
                        <span>View</span>
                      </button>

                      {/* EDIT */}
                      <button
                        type="button"
                        onClick={() =>
                          navigate(
                            `/students/edit/${student.id}`
                          )
                        }
                        title="Edit Student"
                        className="flex items-center gap-1.5 rounded-md bg-yellow-50 px-3 py-2 text-sm font-medium text-yellow-600 transition hover:bg-yellow-100"
                      >
                        <FiEdit size={16} />
                        <span>Edit</span>
                      </button>

                      {/* DELETE */}
                      <button
                        type="button"
                        onClick={() =>
                          handleDeleteClick(student)
                        }
                        title="Delete Student"
                        className="flex items-center gap-1.5 rounded-md bg-red-50 px-3 py-2 text-sm font-medium text-red-600 transition hover:bg-red-100"
                      >
                        <FiTrash2 size={16} />
                        <span>Delete</span>
                      </button>

                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

          {/* =========================
              EMPTY STATE
          ========================= */}
          {filteredStudents.length === 0 && (

            <div className="p-5">

              <EmptyState
                title="No Students Found"
                description="Try changing your search or filter, or add a new student."
                buttonText="Add Student"
                onButtonClick={() =>
                  navigate("/students/add")
                }
              />

            </div>

          )}

        </div>

      </div>

      {/* =========================
          DELETE MODAL
      ========================= */}
      <Modal
        isOpen={selectedStudent !== null}
        onClose={() => setSelectedStudent(null)}
        onConfirm={handleConfirmDelete}
        title="Delete Student?"
        message={
          selectedStudent
            ? `Are you sure you want to delete ${selectedStudent.name}? This action cannot be undone.`
            : "Are you sure you want to delete this student?"
        }
      />

    </>
  );
}

export default Table;
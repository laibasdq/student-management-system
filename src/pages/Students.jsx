import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiPlus,
  FiSearch,
  FiEdit,
  FiEye,
  FiTrash2,
  FiDownload,
  FiUsers,
} from "react-icons/fi";

import Modal from "../components/Modal";

function Students({ students = [], onDelete, onAddStudent }) {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [classFilter, setClassFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("default");
  const [selectedStudent, setSelectedStudent] = useState(null);

  const filteredStudents = [...students]
    .filter((student) => {
      const searchText = search.toLowerCase();

      const name = String(student.name || "").toLowerCase();
      const email = String(student.email || "").toLowerCase();
      const phone = String(student.phone || "");

      const matchesSearch =
        name.includes(searchText) ||
        email.includes(searchText) ||
        phone.includes(searchText);

      const matchesClass =
        classFilter === "All" ||
        String(student.class || "") === classFilter;

      return matchesSearch && matchesClass;
    })
    .sort((a, b) => {
      const nameA = String(a.name || "");
      const nameB = String(b.name || "");

      if (sortOrder === "az") {
        return nameA.localeCompare(nameB);
      }

      if (sortOrder === "za") {
        return nameB.localeCompare(nameA);
      }

      return 0;
    });

  const handleDeleteClick = (student) => {
    setSelectedStudent(student);
  };

  const confirmDelete = () => {
    if (selectedStudent && onDelete) {
      onDelete(selectedStudent.id);
    }

    setSelectedStudent(null);
  };

  const handleExport = () => {
    const headers = ["Name", "Email", "Phone", "Class", "Age", "Status"];

    const rows = filteredStudents.map((student) => [
      student.name || "",
      student.email || "",
      student.phone || "",
      student.class || "",
      student.age || "",
      student.status || "",
    ]);

    const csvContent = [
      headers.join(","),
      ...rows.map((row) =>
        row.map((value) => `"${String(value).replace(/"/g, '""')}"`).join(",")
      ),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = "students.csv";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl">
            Students
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage all students in your system.
          </p>
        </div>

        <button
          onClick={onAddStudent}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 font-medium text-white transition hover:bg-blue-700 sm:w-auto"
        >
          <FiPlus size={18} />
          Add Student
        </button>
      </div>

      <div className="rounded-xl bg-white p-4 shadow-sm">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          <div className="relative">
            <FiSearch
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search students..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-lg border border-gray-200 py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <select
            value={classFilter}
            onChange={(e) => setClassFilter(e.target.value)}
            className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          >
            <option value="All">All Classes</option>
            <option value="BS IT">BS IT</option>
            <option value="BS CS">BS CS</option>
            <option value="BS SE">BS SE</option>
          </select>

          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          >
            <option value="default">Sort Students</option>
            <option value="az">Name: A → Z</option>
            <option value="za">Name: Z → A</option>
          </select>
        </div>

        <div className="mt-4 flex flex-col gap-3 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            Showing{" "}
            <span className="font-semibold text-gray-800">
              {filteredStudents.length}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-gray-800">
              {students.length}
            </span>{" "}
            students
          </p>

          <button
            onClick={handleExport}
            className="flex items-center justify-center gap-2 rounded-lg border border-gray-200 px-4 py-2 font-medium text-gray-700 transition hover:bg-gray-50"
          >
            <FiDownload size={17} />
            Export
          </button>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px]">
            <thead className="border-b bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase text-gray-500">
                  Student
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase text-gray-500">
                  Email
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase text-gray-500">
                  Phone
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase text-gray-500">
                  Class
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase text-gray-500">
                  Age
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase text-gray-500">
                  Status
                </th>
                <th className="px-6 py-4 text-center text-xs font-semibold uppercase text-gray-500">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {filteredStudents.length > 0 ? (
                filteredStudents.map((student, index) => {
                  const studentId = student?.id ?? index + 1;

                  return (
                    <tr key={studentId} className="transition hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={
                              student.image ||
                              `https://i.pravatar.cc/150?img=${studentId}`
                            }
                            alt={student.name || "Student"}
                            className="h-10 w-10 rounded-full object-cover"
                          />
                          <div>
                            <p className="font-semibold text-gray-800">
                              {student.name || "Unknown Student"}
                            </p>
                            <p className="text-xs text-gray-400">
                              ID: {studentId}
                            </p>
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-4 text-sm text-gray-600">
                        {student.email || "N/A"}
                      </td>

                      <td className="px-6 py-4 text-sm text-gray-600">
                        {student.phone || "N/A"}
                      </td>

                      <td className="px-6 py-4 text-sm font-medium text-gray-700">
                        {student.class || "N/A"}
                      </td>

                      <td className="px-6 py-4 text-sm text-gray-600">
                        {student.age || "N/A"}
                      </td>

                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
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

                      <td className="px-6 py-4">
                        <div className="flex items-center justify-center gap-2">
                          <button
                            onClick={() =>
                              navigate(`/students/view/${studentId}`)
                            }
                            className="rounded-lg p-2 text-blue-600 transition hover:bg-blue-50"
                            title="View Student"
                          >
                            <FiEye size={17} />
                          </button>

                          <button
                            onClick={() =>
                              navigate(`/students/edit/${studentId}`)
                            }
                            className="rounded-lg p-2 text-green-600 transition hover:bg-green-50"
                            title="Edit Student"
                          >
                            <FiEdit size={17} />
                          </button>

                          <button
                            onClick={() =>
                              handleDeleteClick({ ...student, id: studentId })
                            }
                            className="rounded-lg p-2 text-red-600 transition hover:bg-red-50"
                            title="Delete Student"
                          >
                            <FiTrash2 size={17} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan="7" className="px-6 py-12 text-center">
                    <div className="flex flex-col items-center">
                      <FiUsers size={40} className="text-gray-300" />
                      <h3 className="mt-3 text-lg font-semibold text-gray-700">
                        No Students Found
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        Try changing your search or filter.
                      </p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {selectedStudent && (
        <Modal
          isOpen={true}
          onClose={() => setSelectedStudent(null)}
          title="Delete Student"
        >
          <div className="space-y-4">
            <p className="text-gray-600">
              Are you sure you want to delete{" "}
              <span className="font-semibold text-gray-800">
                {selectedStudent.name}
              </span>
              ?
            </p>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setSelectedStudent(null)}
                className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
              >
                Cancel
              </button>

              <button
                onClick={confirmDelete}
                className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default Students;
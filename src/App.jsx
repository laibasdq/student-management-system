import { useState } from "react";
import { Routes, Route, useNavigate, useParams } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import AddStudent from "./pages/AddStudent";
import EditStudent from "./pages/EditStudent";

import studentsData from "./data/students";

function ViewStudent({ students = [] }) {
  const navigate = useNavigate();
  const { id } = useParams();

  const student = students.find(
    (item, index) => String(item?.id ?? index + 1) === String(id)
  );

  if (!student) {
    return (
      <div className="rounded-xl bg-white p-8 shadow-sm">
        <h1 className="text-2xl font-bold text-gray-800">
          Student Not Found
        </h1>
        <p className="mt-2 text-gray-500">
          The student you are looking for does not exist.
        </p>
        <button
          onClick={() => navigate("/students")}
          className="mt-6 rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700"
        >
          Back to Students
        </button>
      </div>
    );
  }

  const studentId = student?.id ?? id;

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl">
            Student Profile
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            View student information.
          </p>
        </div>
        <button
          onClick={() => navigate("/students")}
          className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
        >
          Back to Students
        </button>
      </div>

      <div className="overflow-hidden rounded-xl bg-white shadow-sm">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6">
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <img
              src={
                student.image ||
                `https://i.pravatar.cc/150?img=${studentId}`
              }
              alt={student.name || "Student"}
              className="h-24 w-24 rounded-full border-4 border-white object-cover shadow-md"
            />
            <div className="text-center text-white sm:text-left">
              <h2 className="text-2xl font-bold">
                {student.name || "Student"}
              </h2>
              <p className="mt-1 text-sm text-blue-100">
                Student ID: {studentId}
              </p>
              <span className="mt-3 inline-flex rounded-full bg-white/20 px-3 py-1 text-xs font-semibold">
                {student.status || "Active"}
              </span>
            </div>
          </div>
        </div>

        <div className="p-6">
          <h3 className="mb-5 text-lg font-semibold text-gray-800">
            Student Information
          </h3>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-gray-50 p-4">
              <p className="text-xs font-medium uppercase text-gray-400">
                Full Name
              </p>
              <p className="mt-1 font-semibold text-gray-800">
                {student.name || "N/A"}
              </p>
            </div>

            <div className="rounded-lg bg-gray-50 p-4">
              <p className="text-xs font-medium uppercase text-gray-400">
                Email
              </p>
              <p className="mt-1 break-words font-semibold text-gray-800">
                {student.email || "N/A"}
              </p>
            </div>

            <div className="rounded-lg bg-gray-50 p-4">
              <p className="text-xs font-medium uppercase text-gray-400">
                Phone
              </p>
              <p className="mt-1 font-semibold text-gray-800">
                {student.phone || "N/A"}
              </p>
            </div>

            <div className="rounded-lg bg-gray-50 p-4">
              <p className="text-xs font-medium uppercase text-gray-400">
                Class
              </p>
              <p className="mt-1 font-semibold text-gray-800">
                {student.class || "N/A"}
              </p>
            </div>

            <div className="rounded-lg bg-gray-50 p-4">
              <p className="text-xs font-medium uppercase text-gray-400">
                Age
              </p>
              <p className="mt-1 font-semibold text-gray-800">
                {student.age || "N/A"}
              </p>
            </div>

            <div className="rounded-lg bg-gray-50 p-4">
              <p className="text-xs font-medium uppercase text-gray-400">
                Status
              </p>
              <p className="mt-1 font-semibold text-gray-800">
                {student.status || "N/A"}
              </p>
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <button
              onClick={() => navigate(`/students/edit/${studentId}`)}
              className="rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white transition hover:bg-blue-700"
            >
              Edit Student
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  const navigate = useNavigate();

  const [students, setStudents] = useState(studentsData);

  const handleAddStudent = (student) => {
    setStudents((previousStudents) => [
      ...previousStudents,
      student,
    ]);
  };

  const handleUpdateStudent = (updatedStudent) => {
    setStudents((previousStudents) =>
      previousStudents.map((student) =>
        String(student.id) === String(updatedStudent.id)
          ? updatedStudent
          : student
      )
    );
  };

  const handleDeleteStudent = (studentId) => {
    setStudents((previousStudents) =>
      previousStudents.filter(
        (student) => String(student.id) !== String(studentId)
      )
    );
  };

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard students={students} />} />

        <Route
          path="/students"
          element={
            <Students
              students={students}
              onAddStudent={() => navigate("/students/add")}
              onDelete={handleDeleteStudent}
            />
          }
        />

        <Route
          path="/students/add"
          element={<AddStudent onAddStudent={handleAddStudent} />}
        />

        <Route
          path="/students/view/:id"
          element={<ViewStudent students={students} />}
        />

        <Route
          path="/students/edit/:id"
          element={
            <EditStudent
              students={students}
              onUpdateStudent={handleUpdateStudent}
            />
          }
        />

        <Route
          path="/teachers"
          element={
            <div className="rounded-xl bg-white p-8 shadow-sm">
              <h1 className="text-2xl font-bold text-gray-800">
                Teachers
              </h1>
              <p className="mt-2 text-gray-500">
                Teachers page coming soon.
              </p>
            </div>
          }
        />

        <Route
          path="/courses"
          element={
            <div className="rounded-xl bg-white p-8 shadow-sm">
              <h1 className="text-2xl font-bold text-gray-800">
                Courses
              </h1>
              <p className="mt-2 text-gray-500">
                Courses page coming soon.
              </p>
            </div>
          }
        />

        <Route
          path="/attendance"
          element={
            <div className="rounded-xl bg-white p-8 shadow-sm">
              <h1 className="text-2xl font-bold text-gray-800">
                Attendance
              </h1>
              <p className="mt-2 text-gray-500">
                Attendance page coming soon.
              </p>
            </div>
          }
        />

        <Route
          path="/finance"
          element={
            <div className="rounded-xl bg-white p-8 shadow-sm">
              <h1 className="text-2xl font-bold text-gray-800">
                Finance
              </h1>
              <p className="mt-2 text-gray-500">
                Finance page coming soon.
              </p>
            </div>
          }
        />

        <Route
          path="/reports"
          element={
            <div className="rounded-xl bg-white p-8 shadow-sm">
              <h1 className="text-2xl font-bold text-gray-800">
                Reports
              </h1>
              <p className="mt-2 text-gray-500">
                Reports page coming soon.
              </p>
            </div>
          }
        />

        <Route
          path="/settings"
          element={
            <div className="rounded-xl bg-white p-8 shadow-sm">
              <h1 className="text-2xl font-bold text-gray-800">
                Settings
              </h1>
              <p className="mt-2 text-gray-500">
                Settings page coming soon.
              </p>
            </div>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
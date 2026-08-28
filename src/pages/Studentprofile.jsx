import { useNavigate, useParams } from "react-router-dom";
import {
  FiArrowLeft,
  FiEdit,
  FiMail,
  FiPhone,
  FiBook,
  FiUser,
} from "react-icons/fi";

function StudentProfile({ students = [] }) {
  const navigate = useNavigate();
  const { id } = useParams();

  const student = students.find(
    (item, index) => String(item?.id ?? index + 1) === String(id)
  );

  const studentId = student?.id ?? id;

  if (!student) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="rounded-2xl bg-white p-8 text-center shadow-sm">
          <h2 className="text-xl font-bold text-gray-800">
            Student Not Found
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            The student you are looking for does not exist.
          </p>
          <button
            onClick={() => navigate("/students")}
            className="mt-5 rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white transition hover:bg-blue-700"
          >
            Back to Students
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          onClick={() => navigate("/students")}
          className="flex w-fit items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
        >
          <FiArrowLeft />
          Back to Students
        </button>

        <button
          onClick={() => navigate(`/students/edit/${studentId}`)}
          className="flex w-fit items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
        >
          <FiEdit />
          Edit Student
        </button>
      </div>

      <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-10 sm:px-10">
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <img
              src={
                student.image ||
                `https://i.pravatar.cc/150?img=${studentId}`
              }
              alt={student.name || "Student"}
              className="h-28 w-28 rounded-full border-4 border-white object-cover shadow-lg"
            />

            <div className="text-center text-white sm:text-left">
              <h1 className="text-2xl font-bold sm:text-3xl">
                {student.name || "Student Name"}
              </h1>

              <p className="mt-1 text-sm text-blue-100">
                Student ID: {studentId}
              </p>

              <span
                className={`mt-3 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                  student.status === "Active"
                    ? "bg-green-100 text-green-700"
                    : student.status === "Pending"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {student.status || "Unknown"}
              </span>
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-10">
          <h2 className="mb-6 text-xl font-bold text-gray-800">
            Student Information
          </h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-gray-100 bg-gray-50 p-5">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-blue-100 p-3 text-blue-600">
                  <FiMail size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Email</p>
                  <p className="mt-1 break-all font-medium text-gray-800">
                    {student.email || "Not provided"}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-gray-100 bg-gray-50 p-5">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-green-100 p-3 text-green-600">
                  <FiPhone size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Phone</p>
                  <p className="mt-1 font-medium text-gray-800">
                    {student.phone || "Not provided"}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-gray-100 bg-gray-50 p-5">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-purple-100 p-3 text-purple-600">
                  <FiBook size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Class</p>
                  <p className="mt-1 font-medium text-gray-800">
                    {student.class || "Not provided"}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-gray-100 bg-gray-50 p-5">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-orange-100 p-3 text-orange-600">
                  <FiUser size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Age</p>
                  <p className="mt-1 font-medium text-gray-800">
                    {student.age || "Not provided"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentProfile;
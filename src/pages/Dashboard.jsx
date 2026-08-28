import {
  FiUsers,
  FiUserCheck,
  FiBookOpen,
  FiCalendar,
  FiClock,
  FiDollarSign,
} from "react-icons/fi";

function Dashboard({ students = [] }) {
  // Dynamic student counts
  const totalStudents = students.length;

  const activeStudents = students.filter(
    (student) => student.status === "Active"
  ).length;

  const pendingStudents = students.filter(
    (student) => student.status === "Pending"
  ).length;

  return (
    <div className="space-y-6">

      {/* =========================
          WELCOME SECTION
      ========================= */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl">
          Welcome back, Laiba 👋
        </h1>

        <p className="mt-1 text-sm text-gray-500 sm:text-base">
          Here's what's happening with your students today.
        </p>
      </div>


      {/* =========================
          STATISTICS CARDS
      ========================= */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

        {/* TOTAL STUDENTS */}
        <div className="rounded-xl bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-gray-500">
                Total Students
              </p>

              <h2 className="mt-2 text-3xl font-bold text-gray-800">
                {totalStudents}
              </h2>

              <p className="mt-1 text-sm text-green-600">
                +15% this month
              </p>
            </div>

            {/* Colored Icon Background */}
            <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
              <FiUsers size={25} />
            </div>

          </div>

        </div>


        {/* ACTIVE STUDENTS */}
        <div className="rounded-xl bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-gray-500">
                Active Students
              </p>

              <h2 className="mt-2 text-3xl font-bold text-gray-800">
                {activeStudents}
              </h2>

              <p className="mt-1 text-sm text-green-600">
                Active
              </p>
            </div>

            <div className="rounded-xl bg-green-100 p-3 text-green-600">
              <FiUserCheck size={25} />
            </div>

          </div>

        </div>


        {/* PENDING STUDENTS */}
        <div className="rounded-xl bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-gray-500">
                Pending Students
              </p>

              <h2 className="mt-2 text-3xl font-bold text-gray-800">
                {pendingStudents}
              </h2>

              <p className="mt-1 text-sm text-yellow-600">
                Needs attention
              </p>
            </div>

            <div className="rounded-xl bg-yellow-100 p-3 text-yellow-600">
              <FiClock size={25} />
            </div>

          </div>

        </div>


        {/* TEACHERS */}
        <div className="rounded-xl bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-gray-500">
                Teachers
              </p>

              <h2 className="mt-2 text-3xl font-bold text-gray-800">
                120
              </h2>

              <p className="mt-1 text-sm text-green-600">
                +8% this month
              </p>
            </div>

            <div className="rounded-xl bg-purple-100 p-3 text-purple-600">
              <FiUserCheck size={25} />
            </div>

          </div>

        </div>


        {/* COURSES */}
        <div className="rounded-xl bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-gray-500">
                Courses
              </p>

              <h2 className="mt-2 text-3xl font-bold text-gray-800">
                58
              </h2>

              <p className="mt-1 text-sm text-green-600">
                +10% this month
              </p>
            </div>

            <div className="rounded-xl bg-orange-100 p-3 text-orange-600">
              <FiBookOpen size={25} />
            </div>

          </div>

        </div>


        {/* ATTENDANCE */}
        <div className="rounded-xl bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-gray-500">
                Attendance
              </p>

              <h2 className="mt-2 text-3xl font-bold text-gray-800">
                92%
              </h2>

              <p className="mt-1 text-sm text-green-600">
                +5% this month
              </p>
            </div>

            <div className="rounded-xl bg-pink-100 p-3 text-pink-600">
              <FiCalendar size={25} />
            </div>

          </div>

        </div>

      </div>


      {/* =========================
          QUICK SUMMARY
      ========================= */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

        {/* STUDENT SUMMARY */}
        <div className="rounded-xl bg-white p-6 shadow-sm transition duration-300 hover:shadow-md">

          <h2 className="text-xl font-bold text-gray-800">
            Student Summary
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Overview of students in the system.
          </p>


          <div className="mt-5 space-y-4">

            {/* Total */}
            <div className="flex items-center justify-between rounded-lg bg-gray-50 p-4">

              <div className="flex items-center gap-3">

                <div className="rounded-lg bg-blue-100 p-2 text-blue-600">
                  <FiUsers size={18} />
                </div>

                <span className="text-sm font-medium text-gray-700">
                  Total Students
                </span>

              </div>

              <span className="font-bold text-gray-800">
                {totalStudents}
              </span>

            </div>


            {/* Active */}
            <div className="flex items-center justify-between rounded-lg bg-gray-50 p-4">

              <div className="flex items-center gap-3">

                <div className="rounded-lg bg-green-100 p-2 text-green-600">
                  <FiUserCheck size={18} />
                </div>

                <span className="text-sm font-medium text-gray-700">
                  Active Students
                </span>

              </div>

              <span className="font-bold text-green-600">
                {activeStudents}
              </span>

            </div>


            {/* Pending */}
            <div className="flex items-center justify-between rounded-lg bg-gray-50 p-4">

              <div className="flex items-center gap-3">

                <div className="rounded-lg bg-yellow-100 p-2 text-yellow-600">
                  <FiClock size={18} />
                </div>

                <span className="text-sm font-medium text-gray-700">
                  Pending Students
                </span>

              </div>

              <span className="font-bold text-yellow-600">
                {pendingStudents}
              </span>

            </div>

          </div>

        </div>


        {/* DASHBOARD SUMMARY */}
        <div className="rounded-xl bg-white p-6 shadow-sm transition duration-300 hover:shadow-md">

          <h2 className="text-xl font-bold text-gray-800">
            Dashboard Summary
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Quick overview of your school management system.
          </p>


          <div className="mt-5 space-y-4">

            {/* Teachers */}
            <div className="flex items-center justify-between rounded-lg bg-gray-50 p-4">

              <div className="flex items-center gap-3">

                <div className="rounded-lg bg-purple-100 p-2 text-purple-600">
                  <FiUserCheck size={18} />
                </div>

                <span className="text-sm font-medium text-gray-700">
                  Teachers
                </span>

              </div>

              <span className="font-bold text-gray-800">
                120
              </span>

            </div>


            {/* Courses */}
            <div className="flex items-center justify-between rounded-lg bg-gray-50 p-4">

              <div className="flex items-center gap-3">

                <div className="rounded-lg bg-orange-100 p-2 text-orange-600">
                  <FiBookOpen size={18} />
                </div>

                <span className="text-sm font-medium text-gray-700">
                  Courses
                </span>

              </div>

              <span className="font-bold text-gray-800">
                58
              </span>

            </div>


            {/* Attendance */}
            <div className="flex items-center justify-between rounded-lg bg-gray-50 p-4">

              <div className="flex items-center gap-3">

                <div className="rounded-lg bg-pink-100 p-2 text-pink-600">
                  <FiCalendar size={18} />
                </div>

                <span className="text-sm font-medium text-gray-700">
                  Attendance
                </span>

              </div>

              <span className="font-bold text-gray-800">
                92%
              </span>

            </div>

          </div>

        </div>

      </div>


      {/* =========================
          RECENT ACTIVITY
      ========================= */}
      <div className="rounded-xl bg-white p-6 shadow-sm transition duration-300 hover:shadow-md">

        <h2 className="text-xl font-bold text-gray-800">
          Recent Activity
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Latest activities in your dashboard.
        </p>


        <div className="mt-5 space-y-4">

          {/* Activity 1 */}
          <div className="flex items-center gap-4 rounded-lg bg-gray-50 p-4">

            <div className="rounded-full bg-blue-100 p-3 text-blue-600">
              <FiUsers size={18} />
            </div>

            <div>
              <p className="font-medium text-gray-800">
                New student registered
              </p>

              <p className="text-sm text-gray-500">
                5 minutes ago
              </p>
            </div>

          </div>


          {/* Activity 2 */}
          <div className="flex items-center gap-4 rounded-lg bg-gray-50 p-4">

            <div className="rounded-full bg-green-100 p-3 text-green-600">
              <FiUserCheck size={18} />
            </div>

            <div>
              <p className="font-medium text-gray-800">
                Student profile updated
              </p>

              <p className="text-sm text-gray-500">
                20 minutes ago
              </p>
            </div>

          </div>


          {/* Activity 3 */}
          <div className="flex items-center gap-4 rounded-lg bg-gray-50 p-4">

            <div className="rounded-full bg-purple-100 p-3 text-purple-600">
              <FiBookOpen size={18} />
            </div>

            <div>
              <p className="font-medium text-gray-800">
                New course added
              </p>

              <p className="text-sm text-gray-500">
                1 hour ago
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;
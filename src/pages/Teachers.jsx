import { useState } from "react";

function Teachers() {
  const [teachers] = useState([
    {
      id: 1,
      name: "Ahmed Khan",
      email: "ahmed.khan@example.com",
      subject: "Mathematics",
      phone: "+92 300 1111111",
      status: "Active",
    },
    {
      id: 2,
      name: "Sana Ahmed",
      email: "sana.ahmed@example.com",
      subject: "English",
      phone: "+92 301 2222222",
      status: "Active",
    },
    {
      id: 3,
      name: "Usman Malik",
      email: "usman.malik@example.com",
      subject: "Computer Science",
      phone: "+92 302 3333333",
      status: "Inactive",
    },
    {
      id: 4,
      name: "Ayesha Noor",
      email: "ayesha.noor@example.com",
      subject: "Physics",
      phone: "+92 303 4444444",
      status: "Active",
    },
  ]);

  return (
    <div>

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Teachers
        </h1>

        <p className="mt-1 text-gray-500">
          Manage all registered teachers.
        </p>
      </div>

      {/* Teachers Table */}
      <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">

        <table className="w-full text-left">

          <thead className="bg-gray-50">
            <tr>
              <th className="px-5 py-4 text-sm font-semibold text-gray-600">
                Teacher
              </th>

              <th className="px-5 py-4 text-sm font-semibold text-gray-600">
                Email
              </th>

              <th className="px-5 py-4 text-sm font-semibold text-gray-600">
                Subject
              </th>

              <th className="px-5 py-4 text-sm font-semibold text-gray-600">
                Phone
              </th>

              <th className="px-5 py-4 text-sm font-semibold text-gray-600">
                Status
              </th>
            </tr>
          </thead>

          <tbody>

            {teachers.map((teacher) => (
              <tr
                key={teacher.id}
                className="border-t border-gray-100 hover:bg-gray-50"
              >

                <td className="px-5 py-4 font-medium text-gray-800">
                  {teacher.name}
                </td>

                <td className="px-5 py-4 text-sm text-gray-600">
                  {teacher.email}
                </td>

                <td className="px-5 py-4 text-sm text-gray-600">
                  {teacher.subject}
                </td>

                <td className="px-5 py-4 text-sm text-gray-600">
                  {teacher.phone}
                </td>

                <td className="px-5 py-4">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      teacher.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {teacher.status}
                  </span>
                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>
    </div>
  );
}

export default Teachers;
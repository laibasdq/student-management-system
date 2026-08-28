import {
  FiHome,
  FiUsers,
  FiBook,
  FiCalendar,
  FiDollarSign,
  FiBarChart2,
  FiSettings,
  FiLogOut,
  FiX,
} from "react-icons/fi";

import { useNavigate } from "react-router-dom";

function Sidebar({ isOpen, onClose }) {
  const navigate = useNavigate();

  const menuItems = [
    {
      name: "Dashboard",
      path: "/",
      icon: <FiHome size={19} />,
    },
    {
      name: "Students",
      path: "/students",
      icon: <FiUsers size={19} />,
    },
    {
      name: "Teachers",
      path: "/teachers",
      icon: <FiUsers size={19} />,
    },
    {
      name: "Courses",
      path: "/courses",
      icon: <FiBook size={19} />,
    },
    {
      name: "Attendance",
      path: "/attendance",
      icon: <FiCalendar size={19} />,
    },
    {
      name: "Finance",
      path: "/finance",
      icon: <FiDollarSign size={19} />,
    },
    {
      name: "Reports",
      path: "/reports",
      icon: <FiBarChart2 size={19} />,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: <FiSettings size={19} />,
    },
  ];

  const handleNavigate = (path) => {
    navigate(path);
    onClose();
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed left-0 top-0 z-50 h-screen w-64
          border-r border-gray-200 bg-white
          p-4 shadow-xl
          transition-transform duration-300
          lg:sticky lg:top-[70px] lg:z-30
          lg:block lg:h-[calc(100vh-70px)]
          lg:translate-x-0 lg:shadow-none
          ${
            isOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >

        {/* Mobile Header */}
        <div className="mb-6 flex items-center justify-between lg:hidden">
          <h2 className="text-lg font-bold text-gray-800">
            Student Dashboard
          </h2>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-gray-600 hover:bg-gray-100"
          >
            <FiX size={22} />
          </button>
        </div>

        {/* Desktop Title */}
        <h2 className="mb-6 hidden text-xl font-bold text-gray-800 lg:block">
          Student Dashboard
        </h2>

        {/* Menu */}
        <nav className="space-y-1.5">

          {menuItems.map((item) => (
            <button
              key={item.name}
              type="button"
              onClick={() => handleNavigate(item.path)}
              className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left text-gray-700 transition hover:bg-blue-50 hover:text-blue-600"
            >
              {item.icon}

              <span className="text-sm font-medium">
                {item.name}
              </span>
            </button>
          ))}

        </nav>

        {/* Logout */}
        <button
          type="button"
          className="mt-6 flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left text-gray-700 transition hover:bg-red-50 hover:text-red-600"
        >
          <FiLogOut size={19} />

          <span className="text-sm font-medium">
            Logout
          </span>
        </button>

      </aside>
    </>
  );
}

export default Sidebar;
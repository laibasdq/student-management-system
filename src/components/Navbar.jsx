import { useState } from "react";
import {
  FiBell,
  FiChevronDown,
  FiLogOut,
  FiMail,
  FiSearch,
  FiX,
  FiCheck,
} from "react-icons/fi";

function Navbar() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  return (
    <nav className="sticky top-0 z-50 flex h-[70px] items-center justify-between border-b border-gray-200 bg-white px-4 shadow-sm sm:px-6">

      {/* Logo */}
      <div className="flex items-center gap-3">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-lg font-bold text-white">
  D
</div>

        <span className="hidden text-xl font-bold text-gray-800 sm:block">
  DevSynx
</span>

      </div>

      {/* Search */}
      <div className="hidden w-64 md:block lg:w-80">

        <div className="flex items-center rounded-lg bg-gray-100 px-4 py-2">

          <FiSearch className="text-gray-500" />

          <input
            type="text"
            placeholder="Search..."
            className="ml-3 w-full bg-transparent text-sm outline-none"
          />

        </div>

      </div>

      {/* Right Side */}
      <div className="flex items-center gap-1 sm:gap-3">

        {/* Notification */}
        <div className="relative">

          <button
            type="button"
            onClick={() =>
              setShowNotifications(!showNotifications)
            }
            className="relative rounded-full p-2 text-gray-600 transition hover:bg-gray-100"
          >
            <FiBell size={20} />

            <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500"></span>
          </button>

          {/* Notification Panel */}
          {showNotifications && (
            <div className="absolute right-0 top-12 z-50 w-[320px] max-w-[calc(100vw-32px)] rounded-xl border border-gray-200 bg-white shadow-xl">

              {/* Header */}
              <div className="flex items-center justify-between border-b border-gray-100 p-4">

                <div>
                  <h3 className="font-semibold text-gray-800">
                    Notifications
                  </h3>

                  <p className="text-xs text-gray-500">
                    You have 3 new notifications
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    setShowNotifications(false)
                  }
                  className="rounded-lg p-1.5 text-gray-500 hover:bg-gray-100"
                >
                  <FiX size={18} />
                </button>

              </div>

              {/* Notification 1 */}
              <div className="border-b border-gray-100 bg-blue-50/50 p-4">

                <div className="flex gap-3">

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    <FiBell size={17} />
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-800">
                      New student registered
                    </p>

                    <p className="mt-1 text-xs text-gray-500">
                      Ahmed has been added to the system.
                    </p>

                    <p className="mt-1 text-xs text-gray-400">
                      5 minutes ago
                    </p>
                  </div>

                </div>

              </div>

              {/* Notification 2 */}
              <div className="border-b border-gray-100 p-4">

                <div className="flex gap-3">

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <FiCheck size={17} />
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-800">
                      Assignment submitted
                    </p>

                    <p className="mt-1 text-xs text-gray-500">
                      Sara submitted an assignment.
                    </p>

                    <p className="mt-1 text-xs text-gray-400">
                      30 minutes ago
                    </p>
                  </div>

                </div>

              </div>

              {/* Notification 3 */}
              <div className="p-4">

                <div className="flex gap-3">

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-yellow-100 text-yellow-600">
                    <FiMail size={17} />
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-800">
                      New message
                    </p>

                    <p className="mt-1 text-xs text-gray-500">
                      You received a new message.
                    </p>

                    <p className="mt-1 text-xs text-gray-400">
                      1 hour ago
                    </p>
                  </div>

                </div>

              </div>

            </div>
          )}

        </div>

        {/* Messages */}
        <button
          type="button"
          className="rounded-full p-2 text-gray-600 transition hover:bg-gray-100"
        >
          <FiMail size={20} />
        </button>

        {/* Profile */}
        <div className="relative">

          <button
            type="button"
            onClick={() => setShowProfile(!showProfile)}
            className="flex items-center gap-2 rounded-lg p-1.5 transition hover:bg-gray-100"
          >

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-600">
              L
            </div>

            <div className="hidden lg:block">
              <p className="text-sm font-semibold text-gray-800">
                Laiba
              </p>

              <p className="text-xs text-gray-500">
                Admin
              </p>
            </div>

            <FiChevronDown className="hidden text-gray-500 sm:block" />

          </button>

          {/* Profile Dropdown */}
          {showProfile && (
            <div className="absolute right-0 top-12 z-50 w-64 rounded-xl border border-gray-200 bg-white p-4 shadow-xl">

              <div className="flex items-center gap-3 border-b border-gray-100 pb-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-lg font-bold text-blue-600">
                  L
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800">
                    Laiba Siddique
                  </h3>

                  <p className="text-xs text-gray-500">
                    Administrator
                  </p>
                </div>

              </div>

              <div className="space-y-3 py-4">

                <div>
                  <p className="text-xs text-gray-400">
                    Email
                  </p>

                  <p className="text-sm text-gray-700">
                    laiba@example.com
                  </p>
                </div>

                <div>
                  <p className="text-xs text-gray-400">
                    Phone
                  </p>

                  <p className="text-sm text-gray-700">
                    +92 300 0000000
                  </p>
                </div>

                <div>
                  <p className="text-xs text-gray-400">
                    Address
                  </p>

                  <p className="text-sm text-gray-700">
                    Pakistan
                  </p>
                </div>

              </div>

              <button
                type="button"
                className="w-full rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
              >
                Edit Profile
              </button>

            </div>
          )}

        </div>

        {/* Logout */}
        <button
          type="button"
          className="flex items-center gap-2 rounded-lg px-2 py-2 text-sm text-gray-600 transition hover:bg-red-50 hover:text-red-600 md:px-3"
        >
          <FiLogOut size={18} />

          <span className="hidden md:block">
            Logout
          </span>
        </button>

      </div>

    </nav>
  );
}

export default Navbar;
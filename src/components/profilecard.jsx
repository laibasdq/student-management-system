import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiEdit,
} from "react-icons/fi";

function ProfileCard() {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">

      {/* Profile Header */}
      <div className="flex flex-col items-center text-center sm:flex-row sm:text-left">

        {/* Profile Image */}
        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-blue-100 text-2xl font-bold text-blue-600">
          L
        </div>

        {/* Name */}
        <div className="mt-4 sm:ml-5 sm:mt-0">

          <h2 className="text-xl font-bold text-gray-800">
            Laiba Siddique
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Administrator
          </p>

        </div>

      </div>

      {/* Information */}
      <div className="mt-6 space-y-4">

        {/* Email */}
        <div className="flex items-center gap-3">

          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
            <FiMail size={17} />
          </div>

          <div>
            <p className="text-xs text-gray-400">
              Email
            </p>

            <p className="text-sm text-gray-700">
              laiba@example.com
            </p>
          </div>

        </div>

        {/* Phone */}
        <div className="flex items-center gap-3">

          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-50 text-green-600">
            <FiPhone size={17} />
          </div>

          <div>
            <p className="text-xs text-gray-400">
              Phone
            </p>

            <p className="text-sm text-gray-700">
              +92 300 0000000
            </p>
          </div>

        </div>

        {/* Address */}
        <div className="flex items-center gap-3">

          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-50 text-purple-600">
            <FiMapPin size={17} />
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

      </div>

      {/* Edit Button */}
      <button
        type="button"
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
      >
        <FiEdit size={17} />
        Edit Profile
      </button>

    </div>
  );
}

export default ProfileCard;